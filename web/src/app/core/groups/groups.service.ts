import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiHttpService } from '../http/api-http.service';
import type { CreateGroupRequest, GroupView } from './groups.models';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  constructor(private readonly apiHttp: ApiHttpService) {}

  findAll(): Observable<GroupView[]> {
    return this.apiHttp.get<GroupView[]>('/groups');
  }

  create(payload: CreateGroupRequest): Observable<GroupView> {
    return this.apiHttp.post<GroupView, CreateGroupRequest>('/groups', payload);
  }
}
