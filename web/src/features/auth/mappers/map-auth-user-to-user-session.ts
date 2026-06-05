import type { UserSession } from '../../../app/types/user-session';
import type { AuthUser } from '../types/auth-user';

export function mapAuthUserToUserSession(user: AuthUser): UserSession {
  return {
    name: getDisplayName(user),
    email: user.email ?? '',
  };
}

function getDisplayName(user: AuthUser) {
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(' ').trim();

  return fullName || user.nickname;
}
