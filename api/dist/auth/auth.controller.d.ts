import { AuthService } from './auth.service';
import type { AuthenticatedRequest } from './authenticated-request';
import type { LoginDto } from './dto/login.dto';
import type { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<{
        accessToken: string;
        user: {
            email: string | null;
            id: string;
            firstName: string | null;
            lastName: string | null;
            nickname: string;
            status: import("src/generated/prisma").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    login(body: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            firstName: string | null;
            lastName: string | null;
            nickname: string;
            email: string | null;
            status: import("src/generated/prisma").$Enums.UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    me(request: AuthenticatedRequest): Promise<{
        email: string | null;
        id: string;
        firstName: string | null;
        lastName: string | null;
        nickname: string;
        status: import("src/generated/prisma").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
