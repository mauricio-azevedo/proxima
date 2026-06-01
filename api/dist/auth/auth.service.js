"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const prisma_1 = require("../generated/prisma");
const jwt_service_1 = require("./jwt.service");
const password_service_1 = require("./password.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    passwordService;
    constructor(prisma, jwtService, passwordService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.passwordService = passwordService;
    }
    async register(dto) {
        const firstName = dto.firstName?.trim();
        const lastName = dto.lastName?.trim();
        const nickname = dto.nickname?.trim();
        const email = dto.email?.trim().toLowerCase();
        const password = dto.password;
        if (!firstName || !lastName || !nickname || !email || !password) {
            throw new common_1.BadRequestException('All fields are required.');
        }
        if (password.length < 6) {
            throw new common_1.BadRequestException('Password must have at least 6 characters.');
        }
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email is already registered.');
        }
        const passwordHash = await this.passwordService.hash(password);
        const user = await this.prisma.user.create({
            data: {
                firstName,
                lastName,
                nickname,
                email,
                passwordHash,
                status: prisma_1.UserStatus.REGISTERED,
            },
            select: this.userSelect(),
        });
        return {
            accessToken: this.jwtService.sign({ sub: user.id, email: user.email }),
            user,
        };
    }
    async login(dto) {
        const email = dto.email?.trim().toLowerCase();
        const password = dto.password;
        if (!email || !password) {
            throw new common_1.BadRequestException('Email and password are required.');
        }
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user || !user.passwordHash || user.status !== prisma_1.UserStatus.REGISTERED) {
            throw new common_1.UnauthorizedException('Invalid credentials.');
        }
        const passwordMatches = await this.passwordService.verify(password, user.passwordHash);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException('Invalid credentials.');
        }
        return {
            accessToken: this.jwtService.sign({ sub: user.id, email: user.email }),
            user: this.serializeUser(user),
        };
    }
    async me(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: this.userSelect(),
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found.');
        }
        return user;
    }
    serializeUser(user) {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            nickname: user.nickname,
            email: user.email,
            status: user.status,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };
    }
    userSelect() {
        return {
            id: true,
            firstName: true,
            lastName: true,
            nickname: true,
            email: true,
            status: true,
            createdAt: true,
            updatedAt: true,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_service_1.JwtService,
        password_service_1.PasswordService])
], AuthService);
//# sourceMappingURL=auth.service.js.map