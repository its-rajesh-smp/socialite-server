/*
  Warnings:

  - Added the required column `taskType` to the `PracticeTask` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('RESOURCE', 'CODING');

-- AlterTable
ALTER TABLE "PracticeTask" ADD COLUMN     "taskType" "TaskType" NOT NULL;
