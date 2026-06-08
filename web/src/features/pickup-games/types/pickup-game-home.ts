export type PickupGameVisibility = 'PRIVATE' | 'PUBLIC';
export type PickupGameUserRole = 'MEMBER' | 'ADMIN';
export type GameDayStatus = 'SCHEDULED' | 'WAITING_FOR_PLAYERS' | 'PLAYING' | 'FINISHED' | 'CANCELLED';
export type MatchStatus = 'RUNNING' | 'FINISHED' | 'CANCELLED';
export type Weekday = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

export type PickupGameHomeOperationalState = 'waiting_for_players' | 'ready_to_start' | 'playing' | null;
export type PickupGameHomeViewerState = 'not_arrived' | 'inside_first_match' | 'next_team' | 'playing' | null;
export type PickupGameHomePrimaryAction = 'arrive' | 'start_match' | 'open' | null;

export interface PickupGamesHomeResponse {
  activePickupGame: PickupGameHomeItem | null;
  myPickupGames: PickupGameHomeItem[];
  discoverPickupGames: PickupGameHomeItem[];
}

export interface PickupGameHomeItem {
  id: string;
  name: string;
  locationName: string | null;
  weekday: Weekday;
  startTime: string;
  defaultTeamSize: number;
  visibility: PickupGameVisibility;
  memberCount: number;
  viewerRole: PickupGameUserRole | null;
  nextGameDay: PickupGameHomeDay | null;
}

export interface PickupGameHomeDay {
  id: string;
  date: string;
  status: GameDayStatus;
  teamSize: number;
  listEntriesCount: number;
  queueEntriesCount: number;
  viewerHasJoinedList: boolean;
  viewerHasArrived: boolean;
  operationalState: PickupGameHomeOperationalState;
  viewerState: PickupGameHomeViewerState;
  viewerTeamQueueNumber: number | null;
  viewerProspectiveTeamQueueNumber: number | null;
  primaryAction: PickupGameHomePrimaryAction;
  currentMatch: PickupGameHomeCurrentMatch | null;
}

export interface PickupGameHomeCurrentMatch {
  id: string;
  number: number;
  teamSize: number;
  status: MatchStatus;
  startedAt: string;
  teamAScore: number;
  teamBScore: number;
  viewerIsPlaying: boolean;
}
