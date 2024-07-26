/*
  Warnings:

  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PostReactions" AS ENUM ('LIKE', 'HAHA', 'DISLIKE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "NewsFeedStatus" (
    "id" TEXT NOT NULL,
    "picture_URL" TEXT,
    "text" TEXT,
    "backgroundImage_URL" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "UserId" TEXT NOT NULL,

    CONSTRAINT "NewsFeedStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsFeedPosts" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsFeedPosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsPostReactions" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "NewsFeedPostsId" TEXT NOT NULL,
    "reactionType" "PostReactions" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsPostReactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsPostComments" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "picture_URL" TEXT,
    "text" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsPostComments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NewsFeedStatus" ADD CONSTRAINT "NewsFeedStatus_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsFeedPosts" ADD CONSTRAINT "NewsFeedPosts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsPostReactions" ADD CONSTRAINT "NewsPostReactions_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsPostReactions" ADD CONSTRAINT "NewsPostReactions_NewsFeedPostsId_fkey" FOREIGN KEY ("NewsFeedPostsId") REFERENCES "NewsFeedPosts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsPostComments" ADD CONSTRAINT "NewsPostComments_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
