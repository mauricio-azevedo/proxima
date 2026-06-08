import { apiRequest } from '../../../shared/api/http/api-request';
import { readAuthToken } from '../../auth/storage/read-auth-token';
import type { CreatePickupGameRequest } from '../types/create-pickup-game-request';

interface CreatePickupGameResponse {
  id: string;
}

export function createPickupGame(payload: CreatePickupGameRequest) {
  return apiRequest<CreatePickupGameResponse>('/pickup-games', {
    method: 'POST',
    accessToken: readAuthToken(),
    body: JSON.stringify(payload),
  });
}
