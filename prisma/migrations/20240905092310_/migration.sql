/*
  Warnings:

  - You are about to drop the `UserTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserTag";

-- CreateTable
CREATE TABLE "TaskTag" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TaskTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TaskTag" ADD CONSTRAINT "TaskTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
