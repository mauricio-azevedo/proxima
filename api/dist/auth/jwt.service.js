"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7;
let JwtService = class JwtService {
    sign(payload) {
        const secret = this.getSecret();
        const header = this.encode({ alg: 'HS256', typ: 'JWT' });
        const body = this.encode({
            ...payload,
            exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS,
        });
        const signature = this.signData(`${header}.${body}`, secret);
        return `${header}.${body}.${signature}`;
    }
    verify(token) {
        const secret = this.getSecret();
        const [header, body, signature] = token.split('.');
        if (!header || !body || !signature) {
            throw new common_1.UnauthorizedException('Invalid token.');
        }
        const expectedSignature = this.signData(`${header}.${body}`, secret);
        if (!this.safeCompare(signature, expectedSignature)) {
            throw new common_1.UnauthorizedException('Invalid token.');
        }
        const payload = JSON.parse(this.decode(body));
        if (!payload.sub || !payload.email || !payload.exp) {
            throw new common_1.UnauthorizedException('Invalid token.');
        }
        if (payload.exp < Math.floor(Date.now() / 1000)) {
            throw new common_1.UnauthorizedException('Token expired.');
        }
        return payload;
    }
    getSecret() {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET is required.');
        }
        return secret;
    }
    signData(data, secret) {
        return (0, node_crypto_1.createHmac)('sha256', secret).update(data).digest('base64url');
    }
    encode(value) {
        return Buffer.from(JSON.stringify(value)).toString('base64url');
    }
    decode(value) {
        return Buffer.from(value, 'base64url').toString('utf8');
    }
    safeCompare(left, right) {
        const leftBuffer = Buffer.from(left);
        const rightBuffer = Buffer.from(right);
        if (leftBuffer.length !== rightBuffer.length) {
            return false;
        }
        return (0, node_crypto_1.timingSafeEqual)(leftBuffer, rightBuffer);
    }
};
exports.JwtService = JwtService;
exports.JwtService = JwtService = __decorate([
    (0, common_1.Injectable)()
], JwtService);
//# sourceMappingURL=jwt.service.js.map