import { PickupGameVisibility, Weekday } from '../../../generated/prisma';

export interface CreatePickupGameDto {
  name?: string;
  locationName?: string;
  weekday?: Weekday;
  startTime?: string;
  defaultTeamSize?: number;
  visibility?: PickupGameVisibility;
}
