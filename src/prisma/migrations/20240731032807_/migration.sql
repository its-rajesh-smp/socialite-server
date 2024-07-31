/*
  Warnings:

  - Added the required column `NewsFeedPostsId` to the `NewsPostComments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsPostComments" ADD COLUMN     "NewsFeedPostsId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "NewsPostComments" ADD CONSTRAINT "NewsPostComments_NewsFeedPostsId_fkey" FOREIGN KEY ("NewsFeedPostsId") REFERENCES "NewsFeedPosts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
