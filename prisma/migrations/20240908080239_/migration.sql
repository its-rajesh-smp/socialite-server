/*
  Warnings:

  - Added the required column `questionLink` to the `PracticeTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PracticeTask" ADD COLUMN     "questionLink" TEXT NOT NULL;
