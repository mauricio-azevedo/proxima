import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createHmac, timingSafeEqual } from 'node:crypto';

interface JwtPayload {
  sub: string;
  email: string;
  exp: number;
}

const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7;

@Injectable()
export class JwtService {
  sign(payload: Omit<JwtPayload, 'exp'>): string {
    const secret = this.getSecret();
    const header = this.encode({ alg: 'HS256', typ: 'JWT' });
    const body = this.encode({
      ...payload,
      exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS,
    });
    const signature = this.signData(`${header}.${body}`, secret);

    return `${header}.${body}.${signature}`;
  }

  verify(token: string): JwtPayload {
    const secret = this.getSecret();
    const [header, body, signature] = token.split('.');

    if (!header || !body || !signature) {
      throw new UnauthorizedException('Invalid token.');
    }

    const expectedSignature = this.signData(`${header}.${body}`, secret);

    if (!this.safeCompare(signature, expectedSignature)) {
      throw new UnauthorizedException('Invalid token.');
    }

    const payload = JSON.parse(this.decode(body)) as JwtPayload;

    if (!payload.sub || !payload.email || !payload.exp) {
      throw new UnauthorizedException('Invalid token.');
    }

    if (payload.exp < Math.floor(Date.now() / 1000)) {
      throw new UnauthorizedException('Token expired.');
    }

    return payload;
  }

  private getSecret(): string {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET is required.');
    }

    return secret;
  }

  private signData(data: string, secret: string): string {
    return createHmac('sha256', secret).update(data).digest('base64url');
  }

  private encode(value: unknown): string {
    return Buffer.from(JSON.stringify(value)).toString('base64url');
  }

  private decode(value: string): string {
    return Buffer.from(value, 'base64url').toString('utf8');
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
