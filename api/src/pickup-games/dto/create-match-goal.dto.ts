import { MatchSide } from '../../../generated/prisma';

export interface CreateMatchGoalDto {
  side?: MatchSide;
  scorerUserId?: string;
  assistUserId?: string | null;
  minute?: number | null;
}
