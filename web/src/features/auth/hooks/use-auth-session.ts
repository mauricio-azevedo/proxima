import { useEffect, useState } from 'react';

import type { UserSession } from '../../../app/types/user-session';
import { getCurrentUser } from '../api/get-current-user';
import { login } from '../api/login';
import { register } from '../api/register';
import { mapAuthUserToUserSession } from '../mappers/map-auth-user-to-user-session';
import { clearAuthToken } from '../storage/clear-auth-token';
import { readAuthToken } from '../storage/read-auth-token';
import { writeAuthToken } from '../storage/write-auth-token';
import type { AuthSessionStatus } from '../types/auth-session-status';
import type { LoginRequest } from '../types/login-request';
import type { RegisterRequest } from '../types/register-request';

export function useAuthSession() {
  const [status, setStatus] = useState<AuthSessionStatus>('checking');
  const [user, setUser] = useState<UserSession | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function restoreSession() {
      const accessToken = readAuthToken();

      if (!accessToken) {
        if (isMounted) {
          setStatus('unauthenticated');
        }
        return;
      }

      try {
        const currentUser = await getCurrentUser(accessToken);

        if (!isMounted) {
          return;
        }

        setUser(mapAuthUserToUserSession(currentUser));
        setStatus('authenticated');
      } catch {
        clearAuthToken();

        if (isMounted) {
          setUser(null);
          setStatus('unauthenticated');
        }
      }
    }

    void restoreSession();

    return () => {
      isMounted = false;
    };
  }, []);

  async function loginWithCredentials(payload: LoginRequest) {
    const response = await login(payload);

    writeAuthToken(response.accessToken);
    setUser(mapAuthUserToUserSession(response.user));
    setStatus('authenticated');
  }

  async function registerWithCredentials(payload: RegisterRequest) {
    const response = await register(payload);

    writeAuthToken(response.accessToken);
    setUser(mapAuthUserToUserSession(response.user));
    setStatus('authenticated');
  }

  function logout() {
    clearAuthToken();
    setUser(null);
    setStatus('unauthenticated');
  }

  return {
    status,
    user,
    login: loginWithCredentials,
    register: registerWithCredentials,
    logout,
  };
}
