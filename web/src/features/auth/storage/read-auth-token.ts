import { authTokenStorageKey } from './constants/auth-token-storage-key';

export function readAuthToken() {
  return localStorage.getItem(authTokenStorageKey);
}
