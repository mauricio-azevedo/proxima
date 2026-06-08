import { apiRequest } from '../../../shared/api/http/api-request';
import { readAuthToken } from '../../auth/storage/read-auth-token';
import type { PickupGamesHomeResponse } from '../types/pickup-game-home';

export function getPickupGamesHome() {
  return apiRequest<PickupGamesHomeResponse>('/pickup-games/home', {
    method: 'GET',
    accessToken: readAuthToken(),
  });
}
