/*
  Warnings:

  - You are about to drop the column `created_at` on the `match_players` table. All the data in the column will be lost.
  - You are about to drop the `pickup_game_admins` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PickupGameUserRole" AS ENUM ('MEMBER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "pickup_game_admins" DROP CONSTRAINT "pickup_game_admins_pickup_game_id_fkey";

-- DropForeignKey
ALTER TABLE "pickup_game_admins" DROP CONSTRAINT "pickup_game_admins_user_id_fkey";

-- AlterTable
ALTER TABLE "match_players" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "pickup_game_users" ADD COLUMN     "role" "PickupGameUserRole" NOT NULL DEFAULT 'MEMBER';

-- DropTable
DROP TABLE "pickup_game_admins";

-- DropEnum
DROP TYPE "PickupGameAdminRole";

-- CreateIndex
CREATE INDEX "pickup_game_users_pickup_game_id_role_idx" ON "pickup_game_users"("pickup_game_id", "role");
