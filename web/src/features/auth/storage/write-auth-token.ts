import { authTokenStorageKey } from './constants/auth-token-storage-key';

export function writeAuthToken(accessToken: string) {
  localStorage.setItem(authTokenStorageKey, accessToken);
}
