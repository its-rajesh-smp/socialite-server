/*
  Warnings:

  - The values [LIKE,HAHA,DISLIKE] on the enum `PostReactions` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `visibility` to the `NewsFeedPosts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('private', 'public', 'friends');

-- AlterEnum
BEGIN;
CREATE TYPE "PostReactions_new" AS ENUM ('like', 'haha', 'dislike');
ALTER TABLE "NewsPostReactions" ALTER COLUMN "reactionType" TYPE "PostReactions_new" USING ("reactionType"::text::"PostReactions_new");
ALTER TYPE "PostReactions" RENAME TO "PostReactions_old";
ALTER TYPE "PostReactions_new" RENAME TO "PostReactions";
DROP TYPE "PostReactions_old";
COMMIT;

-- AlterTable
ALTER TABLE "NewsFeedPosts" ADD COLUMN     "visibility" "Visibility" NOT NULL;
