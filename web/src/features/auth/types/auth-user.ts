export interface AuthUser {
  id: string;
  firstName: string | null;
  lastName: string | null;
  nickname: string;
  email: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}
