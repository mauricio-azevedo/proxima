export interface GroupMemberView {
  id: string;
  role: 'ADMIN' | 'MEMBER';
  createdAt: string;
  updatedAt: string;
}

export interface GroupView {
  id: string;
  name: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  members: GroupMemberView[];
  _count: {
    members: number;
    peladas: number;
  };
}

export interface CreateGroupRequest {
  name: string;
}
