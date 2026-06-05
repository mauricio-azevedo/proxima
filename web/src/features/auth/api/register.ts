import { apiRequest } from '../../../shared/api/http/api-request';
import type { AuthResponse } from '../types/auth-response';
import type { RegisterRequest } from '../types/register-request';

export function register(payload: RegisterRequest) {
  return apiRequest<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
