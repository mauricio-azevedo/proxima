import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiHttpService } from '../http/api-http.service';
import type {
  CreatePickupGameRequest,
  PickupGameDetailView,
  PickupGameListItemView,
} from './pickup-games.models';

@Injectable({ providedIn: 'root' })
export class PickupGamesService {
  constructor(private readonly apiHttp: ApiHttpService) {}

  findAll(): Observable<PickupGameListItemView[]> {
    return this.apiHttp.get<PickupGameListItemView[]>('/pickup-games');
  }

  findOne(pickupGameId: string): Observable<PickupGameDetailView> {
    return this.apiHttp.get<PickupGameDetailView>(`/pickup-games/${pickupGameId}`);
  }

  create(payload: CreatePickupGameRequest): Observable<PickupGameDetailView> {
    return this.apiHttp.post<PickupGameDetailView, CreatePickupGameRequest>('/pickup-games', payload);
  }

  joinNextDayList(pickupGameId: string): Observable<PickupGameDetailView> {
    return this.apiHttp.post<PickupGameDetailView, Record<string, never>>(
      `/pickup-games/${pickupGameId}/list`,
      {},
    );
  }

  arrive(pickupGameId: string): Observable<PickupGameDetailView> {
    return this.apiHttp.post<PickupGameDetailView, Record<string, never>>(
      `/pickup-games/${pickupGameId}/arrivals`,
      {},
    );
  }
}
