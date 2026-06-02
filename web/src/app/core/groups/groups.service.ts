import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';
import type { CreateGroupRequest, GroupView } from './groups.models';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<GroupView[]> {
    return this.http.get<GroupView[]>(`${API_BASE_URL}/groups`);
  }

  create(payload: CreateGroupRequest): Observable<GroupView> {
    return this.http.post<GroupView>(`${API_BASE_URL}/groups`, payload);
  }
}
