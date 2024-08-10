/*
  Warnings:

  - Added the required column `link` to the `PracticeSetTasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PracticeSetTasks" ADD COLUMN     "link" TEXT NOT NULL;
