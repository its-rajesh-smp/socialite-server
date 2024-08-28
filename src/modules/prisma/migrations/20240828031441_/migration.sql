-- AlterTable
ALTER TABLE "PracticeSet" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PracticeTask" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserTaskMetadata" ALTER COLUMN "note" DROP NOT NULL;
