export type Weekday =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

export type PickupGameVisibility = 'PRIVATE' | 'PUBLIC';
export type PickupGameAdminRole = 'OWNER' | 'ADMIN';
export type GameDayStatus = 'SCHEDULED' | 'WAITING_FOR_PLAYERS' | 'PLAYING' | 'FINISHED' | 'CANCELLED';
export type MatchStatus = 'RUNNING' | 'FINISHED' | 'CANCELLED';
export type MatchSide = 'A' | 'B';
export type UserStatus = 'REGISTERED' | 'PLACEHOLDER';

export interface PickupGameUserMarkerView {
  id: string;
}

export interface PickupGameAdminMarkerView {
  id: string;
  role: PickupGameAdminRole;
}

export interface PickupGameCountView {
  users: number;
}

export interface GameDayCountView {
  listEntries: number;
  queueEntries: number;
}

export interface GameDaySummaryView {
  id: string;
  date: string;
  status: GameDayStatus;
  teamSize: number;
  _count: GameDayCountView;
}

export interface PickupGameListItemView {
  id: string;
  name: string;
  locationName: string | null;
  weekday: Weekday;
  startTime: string;
  defaultTeamSize: number;
  visibility: PickupGameVisibility;
  createdAt: string;
  updatedAt: string;
  users: PickupGameUserMarkerView[];
  admins: PickupGameAdminMarkerView[];
  days: GameDaySummaryView[];
  _count: PickupGameCountView;
}

export interface UserSummaryView {
  id: string;
  firstName: string | null;
  lastName: string | null;
  nickname: string;
  email: string | null;
  status: UserStatus;
}

export interface DayListEntryView {
  id: string;
  joinedAt: string;
  user: UserSummaryView;
}

export interface QueueEntryView {
  id: string;
  arrivedAt: string;
  currentPosition: number;
  user: UserSummaryView;
}

export interface MatchPlayerView {
  id: string;
  side: MatchSide;
  slot: number;
  user: UserSummaryView;
}

export interface GoalEventView {
  id: string;
  side: MatchSide;
  minute: number | null;
  occurredAt: string | null;
  createdAt: string;
  updatedAt: string;
  scorer: UserSummaryView;
  assist: UserSummaryView | null;
}

export interface MatchView {
  id: string;
  number: number;
  teamSize: number;
  status: MatchStatus;
  startedAt: string;
  endedAt: string | null;
  players: MatchPlayerView[];
  goals: GoalEventView[];
}

export interface GameDayDetailView {
  id: string;
  date: string;
  status: GameDayStatus;
  teamSize: number;
  listEntries: DayListEntryView[];
  queueEntries: QueueEntryView[];
  matches: MatchView[];
}

export interface PickupGameDetailView extends Omit<PickupGameListItemView, 'days'> {
  days: GameDayDetailView[];
}

export interface CreatePickupGameRequest {
  name: string;
  locationName?: string | null;
  weekday: Weekday;
  startTime: string;
  defaultTeamSize: number;
  visibility: PickupGameVisibility;
}
