/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NewsFeedPosts" DROP CONSTRAINT "NewsFeedPosts_UserId_fkey";

-- DropForeignKey
ALTER TABLE "NewsFeedStatus" DROP CONSTRAINT "NewsFeedStatus_UserId_fkey";

-- DropForeignKey
ALTER TABLE "NewsPostComments" DROP CONSTRAINT "NewsPostComments_UserId_fkey";

-- DropForeignKey
ALTER TABLE "NewsPostReactions" DROP CONSTRAINT "NewsPostReactions_UserId_fkey";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "NewsFeedStatus" ADD CONSTRAINT "NewsFeedStatus_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsFeedPosts" ADD CONSTRAINT "NewsFeedPosts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsPostReactions" ADD CONSTRAINT "NewsPostReactions_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsPostComments" ADD CONSTRAINT "NewsPostComments_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
