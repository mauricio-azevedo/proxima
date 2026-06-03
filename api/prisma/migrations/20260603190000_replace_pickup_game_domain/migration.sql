-- This migration intentionally replaces the previous group/pelada schema.
-- Existing users are preserved. Existing groups, peladas, queues, matches and match players are dropped.

-- Drop old tables first, respecting dependencies.
DROP TABLE IF EXISTS "match_players";
DROP TABLE IF EXISTS "pelada_queue_entries";
DROP TABLE IF EXISTS "matches";
DROP TABLE IF EXISTS "pelada_players";
DROP TABLE IF EXISTS "peladas";
DROP TABLE IF EXISTS "group_members";
DROP TABLE IF EXISTS "groups";

-- Drop old enum types that no longer belong to the domain.
DROP TYPE IF EXISTS "GroupMemberRole";
DROP TYPE IF EXISTS "PeladaStatus";
DROP TYPE IF EXISTS "PeladaPlayerStatus";
DROP TYPE IF EXISTS "MatchStatus";
DROP TYPE IF EXISTS "MatchTeam";

-- New enum types.
CREATE TYPE "Weekday" AS ENUM (
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY'
);

CREATE TYPE "PickupGameVisibility" AS ENUM (
  'PRIVATE',
  'PUBLIC'
);

CREATE TYPE "PickupGameAdminRole" AS ENUM (
  'OWNER',
  'ADMIN'
);

CREATE TYPE "GameDayStatus" AS ENUM (
  'SCHEDULED',
  'WAITING_FOR_PLAYERS',
  'PLAYING',
  'FINISHED',
  'CANCELLED'
);

CREATE TYPE "MatchStatus" AS ENUM (
  'RUNNING',
  'FINISHED',
  'CANCELLED'
);

CREATE TYPE "MatchSide" AS ENUM (
  'A',
  'B'
);

-- Pickup games: recurring peladas.
CREATE TABLE "pickup_games" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "location_name" TEXT,
  "weekday" "Weekday" NOT NULL,
  "start_time" TEXT NOT NULL,
  "default_team_size" INTEGER NOT NULL DEFAULT 5,
  "visibility" "PickupGameVisibility" NOT NULL DEFAULT 'PRIVATE',
  "created_by_user_id" TEXT NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "pickup_games_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "pickup_game_users" (
  "id" TEXT NOT NULL,
  "pickup_game_id" TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "pickup_game_users_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "pickup_game_admins" (
  "id" TEXT NOT NULL,
  "pickup_game_id" TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "role" "PickupGameAdminRole" NOT NULL DEFAULT 'ADMIN',
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "pickup_game_admins_pkey" PRIMARY KEY ("id")
);

-- Concrete day for a recurring pickup game.
CREATE TABLE "game_days" (
  "id" TEXT NOT NULL,
  "pickup_game_id" TEXT NOT NULL,
  "date" DATE NOT NULL,
  "status" "GameDayStatus" NOT NULL DEFAULT 'SCHEDULED',
  "team_size" INTEGER NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "game_days_pkey" PRIMARY KEY ("id")
);

-- Intent/list before the player arrives at the court.
CREATE TABLE "day_list_entries" (
  "id" TEXT NOT NULL,
  "game_day_id" TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "removed_at" TIMESTAMP(3),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "day_list_entries_pkey" PRIMARY KEY ("id")
);

-- Real operational queue after the player arrives.
CREATE TABLE "queue_entries" (
  "id" TEXT NOT NULL,
  "game_day_id" TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "day_list_entry_id" TEXT,
  "arrived_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "current_position" INTEGER NOT NULL,
  "removed_at" TIMESTAMP(3),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "queue_entries_pkey" PRIMARY KEY ("id")
);

-- Matches are snapshots of what actually happened on a game day.
CREATE TABLE "matches" (
  "id" TEXT NOT NULL,
  "game_day_id" TEXT NOT NULL,
  "number" INTEGER NOT NULL,
  "team_size" INTEGER NOT NULL,
  "status" "MatchStatus" NOT NULL DEFAULT 'RUNNING',
  "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "ended_at" TIMESTAMP(3),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "match_players" (
  "id" TEXT NOT NULL,
  "match_id" TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "side" "MatchSide" NOT NULL,
  "slot" INTEGER NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "match_players_pkey" PRIMARY KEY ("id")
);

-- Goals are the source of truth for the score.
CREATE TABLE "goal_events" (
  "id" TEXT NOT NULL,
  "match_id" TEXT NOT NULL,
  "side" "MatchSide" NOT NULL,
  "scorer_user_id" TEXT NOT NULL,
  "assist_user_id" TEXT,
  "minute" INTEGER,
  "occurred_at" TIMESTAMP(3),
  "created_by_user_id" TEXT NOT NULL,
  "updated_by_user_id" TEXT,
  "deleted_at" TIMESTAMP(3),
  "deleted_by_user_id" TEXT,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "goal_events_pkey" PRIMARY KEY ("id")
);

-- Unique constraints and indexes.
CREATE INDEX "pickup_games_created_by_user_id_idx" ON "pickup_games"("created_by_user_id");
CREATE INDEX "pickup_games_visibility_idx" ON "pickup_games"("visibility");
CREATE INDEX "pickup_games_weekday_start_time_idx" ON "pickup_games"("weekday", "start_time");

CREATE UNIQUE INDEX "pickup_game_users_pickup_game_id_user_id_key" ON "pickup_game_users"("pickup_game_id", "user_id");
CREATE INDEX "pickup_game_users_user_id_idx" ON "pickup_game_users"("user_id");

CREATE UNIQUE INDEX "pickup_game_admins_pickup_game_id_user_id_key" ON "pickup_game_admins"("pickup_game_id", "user_id");
CREATE INDEX "pickup_game_admins_user_id_idx" ON "pickup_game_admins"("user_id");

CREATE UNIQUE INDEX "game_days_pickup_game_id_date_key" ON "game_days"("pickup_game_id", "date");
CREATE INDEX "game_days_status_idx" ON "game_days"("status");
CREATE INDEX "game_days_date_idx" ON "game_days"("date");

CREATE INDEX "day_list_entries_game_day_id_user_id_idx" ON "day_list_entries"("game_day_id", "user_id");
CREATE INDEX "day_list_entries_user_id_idx" ON "day_list_entries"("user_id");
CREATE INDEX "day_list_entries_removed_at_idx" ON "day_list_entries"("removed_at");
CREATE UNIQUE INDEX "day_list_entries_active_unique" ON "day_list_entries"("game_day_id", "user_id") WHERE "removed_at" IS NULL;

CREATE INDEX "queue_entries_game_day_id_current_position_idx" ON "queue_entries"("game_day_id", "current_position");
CREATE INDEX "queue_entries_game_day_id_user_id_idx" ON "queue_entries"("game_day_id", "user_id");
CREATE INDEX "queue_entries_user_id_idx" ON "queue_entries"("user_id");
CREATE INDEX "queue_entries_removed_at_idx" ON "queue_entries"("removed_at");
CREATE UNIQUE INDEX "queue_entries_active_user_unique" ON "queue_entries"("game_day_id", "user_id") WHERE "removed_at" IS NULL;
CREATE UNIQUE INDEX "queue_entries_active_position_unique" ON "queue_entries"("game_day_id", "current_position") WHERE "removed_at" IS NULL;

CREATE UNIQUE INDEX "matches_game_day_id_number_key" ON "matches"("game_day_id", "number");
CREATE INDEX "matches_game_day_id_status_idx" ON "matches"("game_day_id", "status");
CREATE INDEX "matches_started_at_idx" ON "matches"("started_at");

CREATE UNIQUE INDEX "match_players_match_id_user_id_key" ON "match_players"("match_id", "user_id");
CREATE UNIQUE INDEX "match_players_match_id_side_slot_key" ON "match_players"("match_id", "side", "slot");
CREATE INDEX "match_players_match_id_side_idx" ON "match_players"("match_id", "side");
CREATE INDEX "match_players_user_id_idx" ON "match_players"("user_id");

CREATE INDEX "goal_events_match_id_deleted_at_idx" ON "goal_events"("match_id", "deleted_at");
CREATE INDEX "goal_events_scorer_user_id_idx" ON "goal_events"("scorer_user_id");
CREATE INDEX "goal_events_assist_user_id_idx" ON "goal_events"("assist_user_id");
CREATE INDEX "goal_events_created_by_user_id_idx" ON "goal_events"("created_by_user_id");
CREATE INDEX "goal_events_deleted_at_idx" ON "goal_events"("deleted_at");

-- Foreign keys.
ALTER TABLE "pickup_games"
  ADD CONSTRAINT "pickup_games_created_by_user_id_fkey"
  FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "pickup_game_users"
  ADD CONSTRAINT "pickup_game_users_pickup_game_id_fkey"
  FOREIGN KEY ("pickup_game_id") REFERENCES "pickup_games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "pickup_game_users"
  ADD CONSTRAINT "pickup_game_users_user_id_fkey"
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "pickup_game_admins"
  ADD CONSTRAINT "pickup_game_admins_pickup_game_id_fkey"
  FOREIGN KEY ("pickup_game_id") REFERENCES "pickup_games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "pickup_game_admins"
  ADD CONSTRAINT "pickup_game_admins_user_id_fkey"
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "game_days"
  ADD CONSTRAINT "game_days_pickup_game_id_fkey"
  FOREIGN KEY ("pickup_game_id") REFERENCES "pickup_games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "day_list_entries"
  ADD CONSTRAINT "day_list_entries_game_day_id_fkey"
  FOREIGN KEY ("game_day_id") REFERENCES "game_days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "day_list_entries"
  ADD CONSTRAINT "day_list_entries_user_id_fkey"
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "queue_entries"
  ADD CONSTRAINT "queue_entries_game_day_id_fkey"
  FOREIGN KEY ("game_day_id") REFERENCES "game_days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "queue_entries"
  ADD CONSTRAINT "queue_entries_user_id_fkey"
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "queue_entries"
  ADD CONSTRAINT "queue_entries_day_list_entry_id_fkey"
  FOREIGN KEY ("day_list_entry_id") REFERENCES "day_list_entries"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "matches"
  ADD CONSTRAINT "matches_game_day_id_fkey"
  FOREIGN KEY ("game_day_id") REFERENCES "game_days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "match_players"
  ADD CONSTRAINT "match_players_match_id_fkey"
  FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "match_players"
  ADD CONSTRAINT "match_players_user_id_fkey"
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "goal_events"
  ADD CONSTRAINT "goal_events_match_id_fkey"
  FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "goal_events"
  ADD CONSTRAINT "goal_events_scorer_user_id_fkey"
  FOREIGN KEY ("scorer_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "goal_events"
  ADD CONSTRAINT "goal_events_assist_user_id_fkey"
  FOREIGN KEY ("assist_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "goal_events"
  ADD CONSTRAINT "goal_events_created_by_user_id_fkey"
  FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "goal_events"
  ADD CONSTRAINT "goal_events_updated_by_user_id_fkey"
  FOREIGN KEY ("updated_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "goal_events"
  ADD CONSTRAINT "goal_events_deleted_by_user_id_fkey"
  FOREIGN KEY ("deleted_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
