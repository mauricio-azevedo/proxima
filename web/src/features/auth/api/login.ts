import { apiRequest } from '../../../shared/api/http/api-request';
import type { AuthResponse } from '../types/auth-response';
import type { LoginRequest } from '../types/login-request';

export function login(payload: LoginRequest) {
  return apiRequest<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
