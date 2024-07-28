/*
  Warnings:

  - Added the required column `text` to the `NewsFeedPosts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsFeedPosts" ADD COLUMN     "text" TEXT NOT NULL;
