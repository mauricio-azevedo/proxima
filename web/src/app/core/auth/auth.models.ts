export interface AuthUser {
  id: string;
  firstName: string | null;
  lastName: string | null;
  nickname: string;
  email: string | null;
  status: 'REGISTERED' | 'PLACEHOLDER';
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  accessToken: string;
  user: AuthUser;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  password: string;
}
