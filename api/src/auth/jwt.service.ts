import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac, timingSafeEqual } from 'node:crypto';

interface JwtPayload {
  sub: string;
  email: string;
  exp: number;
}

const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7;

@Injectable()
export class JwtService {
  private readonly secret: string;

  constructor(configService: ConfigService) {
    this.secret = configService.getOrThrow<string>('JWT_SECRET');
  }

  sign(payload: Omit<JwtPayload, 'exp'>): string {
    const header = this.encode({ alg: 'HS256', typ: 'JWT' });
    const body = this.encode({
      ...payload,
      exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS,
    });
    const signature = this.signData(`${header}.${body}`);

    return `${header}.${body}.${signature}`;
  }

  verify(token: string): JwtPayload {
    const [header, body, signature] = token.split('.');

    if (!header || !body || !signature) {
      throw new UnauthorizedException('Invalid token.');
    }

    const expectedSignature = this.signData(`${header}.${body}`);

    if (!this.safeCompare(signature, expectedSignature)) {
      throw new UnauthorizedException('Invalid token.');
    }

    const payload = this.parsePayload(body);

    if (!payload.sub || !payload.email || !payload.exp) {
      throw new UnauthorizedException('Invalid token.');
    }

    if (payload.exp < Math.floor(Date.now() / 1000)) {
      throw new UnauthorizedException('Token expired.');
    }

    return payload;
  }

  private signData(data: string): string {
    return createHmac('sha256', this.secret).update(data).digest('base64url');
  }

  private encode(value: unknown): string {
    return Buffer.from(JSON.stringify(value)).toString('base64url');
  }

  private decode(value: string): string {
    return Buffer.from(value, 'base64url').toString('utf8');
  }

  private parsePayload(body: string): JwtPayload {
    try {
      return JSON.parse(this.decode(body)) as JwtPayload;
    } catch {
      throw new UnauthorizedException('Invalid token.');
    }
  }

  private safeCompare(left: string, right: string): boolean {
    const leftBuffer = Buffer.from(left);
    const rightBuffer = Buffer.from(right);

    if (leftBuffer.length !== rightBuffer.length) {
      return false;
    }

    return timingSafeEqual(leftBuffer, rightBuffer);
  }
}
