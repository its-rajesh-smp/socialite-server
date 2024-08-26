/*
  Warnings:

  - You are about to drop the column `practiceSetTaskId` on the `UserSubmitTask` table. All the data in the column will be lost.
  - Added the required column `practiceTaskId` to the `UserSubmitTask` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserSubmitTask" DROP CONSTRAINT "UserSubmitTask_practiceSetTaskId_fkey";

-- AlterTable
ALTER TABLE "UserSubmitTask" DROP COLUMN "practiceSetTaskId",
ADD COLUMN     "practiceTaskId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserSubmitTask" ADD CONSTRAINT "UserSubmitTask_practiceTaskId_fkey" FOREIGN KEY ("practiceTaskId") REFERENCES "PracticeTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;
