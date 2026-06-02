-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('REGISTERED', 'PLACEHOLDER');

-- CreateEnum
CREATE TYPE "GroupMemberRole" AS ENUM ('ADMIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "PeladaStatus" AS ENUM ('OPEN', 'FINISHED');

-- CreateEnum
CREATE TYPE "PeladaPlayerStatus" AS ENUM ('ACTIVE', 'ABSENT');

-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('IN_PROGRESS', 'FINISHED');

-- CreateEnum
CREATE TYPE "MatchTeam" AS ENUM ('A', 'B');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "nickname" TEXT NOT NULL,
    "email" TEXT,
    "password_hash" TEXT,
    "status" "UserStatus" NOT NULL DEFAULT 'PLACEHOLDER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_members" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "GroupMemberRole" NOT NULL DEFAULT 'MEMBER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "group_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "peladas" (
    "id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "players_per_team" INTEGER NOT NULL DEFAULT 5,
    "status" "PeladaStatus" NOT NULL DEFAULT 'OPEN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "peladas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pelada_players" (
    "id" TEXT NOT NULL,
    "pelada_id" TEXT NOT NULL,
    "group_member_id" TEXT NOT NULL,
    "status" "PeladaPlayerStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pelada_players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pelada_queue_entries" (
    "id" TEXT NOT NULL,
    "pelada_id" TEXT NOT NULL,
    "pelada_player_id" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pelada_queue_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matches" (
    "id" TEXT NOT NULL,
    "pelada_id" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "status" "MatchStatus" NOT NULL DEFAULT 'IN_PROGRESS',
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3),
    "team_a_score" INTEGER,
    "team_b_score" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_players" (
    "id" TEXT NOT NULL,
    "match_id" TEXT NOT NULL,
    "pelada_player_id" TEXT NOT NULL,
    "team" "MatchTeam" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_players_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "groups_owner_id_idx" ON "groups"("owner_id");

-- CreateIndex
CREATE INDEX "group_members_user_id_idx" ON "group_members"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "group_members_group_id_user_id_key" ON "group_members"("group_id", "user_id");

-- CreateIndex
CREATE INDEX "peladas_group_id_idx" ON "peladas"("group_id");

-- CreateIndex
CREATE INDEX "peladas_status_idx" ON "peladas"("status");

-- CreateIndex
CREATE INDEX "peladas_date_idx" ON "peladas"("date");

-- CreateIndex
CREATE INDEX "pelada_players_group_member_id_idx" ON "pelada_players"("group_member_id");

-- CreateIndex
CREATE INDEX "pelada_players_pelada_id_status_idx" ON "pelada_players"("pelada_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "pelada_players_pelada_id_group_member_id_key" ON "pelada_players"("pelada_id", "group_member_id");

-- CreateIndex
CREATE UNIQUE INDEX "pelada_queue_entries_pelada_player_id_key" ON "pelada_queue_entries"("pelada_player_id");

-- CreateIndex
CREATE INDEX "pelada_queue_entries_pelada_id_idx" ON "pelada_queue_entries"("pelada_id");

-- CreateIndex
CREATE UNIQUE INDEX "pelada_queue_entries_pelada_id_position_key" ON "pelada_queue_entries"("pelada_id", "position");

-- CreateIndex
CREATE INDEX "matches_pelada_id_status_idx" ON "matches"("pelada_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "matches_pelada_id_sequence_key" ON "matches"("pelada_id", "sequence");

-- CreateIndex
CREATE INDEX "match_players_match_id_team_idx" ON "match_players"("match_id", "team");

-- CreateIndex
CREATE INDEX "match_players_pelada_player_id_idx" ON "match_players"("pelada_player_id");

-- CreateIndex
CREATE UNIQUE INDEX "match_players_match_id_pelada_player_id_key" ON "match_players"("match_id", "pelada_player_id");

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peladas" ADD CONSTRAINT "peladas_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pelada_players" ADD CONSTRAINT "pelada_players_pelada_id_fkey" FOREIGN KEY ("pelada_id") REFERENCES "peladas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pelada_players" ADD CONSTRAINT "pelada_players_group_member_id_fkey" FOREIGN KEY ("group_member_id") REFERENCES "group_members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pelada_queue_entries" ADD CONSTRAINT "pelada_queue_entries_pelada_id_fkey" FOREIGN KEY ("pelada_id") REFERENCES "peladas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pelada_queue_entries" ADD CONSTRAINT "pelada_queue_entries_pelada_player_id_fkey" FOREIGN KEY ("pelada_player_id") REFERENCES "pelada_players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_pelada_id_fkey" FOREIGN KEY ("pelada_id") REFERENCES "peladas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_players" ADD CONSTRAINT "match_players_match_id_fkey" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_players" ADD CONSTRAINT "match_players_pelada_player_id_fkey" FOREIGN KEY ("pelada_player_id") REFERENCES "pelada_players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
