/*
  Warnings:

  - Added the required column `comment` to the `NewsFeedPosts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `like` to the `NewsFeedPosts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsFeedPosts" ADD COLUMN     "comment" INTEGER NOT NULL,
ADD COLUMN     "like" INTEGER NOT NULL;
