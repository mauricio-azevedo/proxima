import type { PickupGameVisibility, Weekday } from './pickup-game-home';

export interface CreatePickupGameRequest {
  name: string;
  locationName?: string;
  weekday: Weekday;
  startTime: string;
  defaultTeamSize: number;
  visibility: PickupGameVisibility;
}
