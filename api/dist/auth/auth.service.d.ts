import { PrismaService } from '../database/prisma.service';
import { JwtService } from './jwt.service';
import { PasswordService } from './password.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly passwordService;
    constructor(prisma: PrismaService, jwtService: JwtService, passwordService: PasswordService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
        user: {
            email: string | null;
            id: string;
            firstName: string | null;
            lastName: string | null;
            nickname: string;
            status: import("../generated/prisma").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            firstName: string | null;
            lastName: string | null;
            nickname: string;
            email: string | null;
            status: import("../generated/prisma").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    me(userId: string): Promise<{
        email: string | null;
        id: string;
        firstName: string | null;
        lastName: string | null;
        nickname: string;
        status: import("../generated/prisma").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private serializeUser;
    private userSelect;
}
