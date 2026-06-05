import { authTokenStorageKey } from './constants/auth-token-storage-key';

export function clearAuthToken() {
  localStorage.removeItem(authTokenStorageKey);
}
