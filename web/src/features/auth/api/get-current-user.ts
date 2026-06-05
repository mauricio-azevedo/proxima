import { apiRequest } from '../../../shared/api/http/api-request';
import type { AuthUser } from '../types/auth-user';

export function getCurrentUser(accessToken: string) {
  return apiRequest<AuthUser>('/auth/me', {
    method: 'GET',
    accessToken,
  });
}
