import type { AuthUser } from './auth-user';

export interface AuthResponse {
  accessToken: string;
  user: AuthUser;
}
