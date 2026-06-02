export type GroupMemberRole = 'ADMIN' | 'MEMBER';
export type UserStatus = 'REGISTERED' | 'PLACEHOLDER';

export interface GroupCurrentUserMembershipView {
  id: string;
  role: GroupMemberRole;
  createdAt: string;
  updatedAt: string;
}

export interface GroupView {
  id: string;
  name: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  members: GroupCurrentUserMembershipView[];
  _count: {
    members: number;
    peladas: number;
  };
}

export interface GroupMemberUserView {
  id: string;
  firstName: string | null;
  lastName: string | null;
  nickname: string;
  email: string | null;
  status: UserStatus;
}

export interface GroupMemberView {
  id: string;
  role: GroupMemberRole;
  createdAt: string;
  updatedAt: string;
  user: GroupMemberUserView;
}

export interface CreateGroupRequest {
  name: string;
}

export interface CreateGroupMemberRequest {
  nickname: string;
}
