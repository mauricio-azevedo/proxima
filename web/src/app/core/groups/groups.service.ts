import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiHttpService } from '../http/api-http.service';
import type {
  CreateGroupMemberRequest,
  CreateGroupRequest,
  GroupMemberView,
  GroupView,
} from './groups.models';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  constructor(private readonly apiHttp: ApiHttpService) {}

  findAll(): Observable<GroupView[]> {
    return this.apiHttp.get<GroupView[]>('/groups');
  }

  findOne(groupId: string): Observable<GroupView> {
    return this.apiHttp.get<GroupView>(`/groups/${groupId}`);
  }

  create(payload: CreateGroupRequest): Observable<GroupView> {
    return this.apiHttp.post<GroupView, CreateGroupRequest>('/groups', payload);
  }

  findMembers(groupId: string): Observable<GroupMemberView[]> {
    return this.apiHttp.get<GroupMemberView[]>(`/groups/${groupId}/members`);
  }

  createMember(groupId: string, payload: CreateGroupMemberRequest): Observable<GroupMemberView> {
    return this.apiHttp.post<GroupMemberView, CreateGroupMemberRequest>(
      `/groups/${groupId}/members`,
      payload,
    );
  }
}
