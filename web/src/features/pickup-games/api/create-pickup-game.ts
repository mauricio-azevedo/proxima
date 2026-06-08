import { apiRequest } from '../../../shared/api/http/api-request';
import { readAuthToken } from '../../auth/storage/read-auth-token';
import type { CreatePickupGameRequest } from '../types/create-pickup-game-request';
import type { PickupGameHomeItem } from '../types/pickup-game-home';

export function createPickupGame(payload: CreatePickupGameRequest) {
  return apiRequest<PickupGameHomeItem>('/pickup-games', {
    method: 'POST',
    accessToken: readAuthToken(),
    body: JSON.stringify(payload),
  });
}
