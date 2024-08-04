-- CreateTable
CREATE TABLE "PracticeSets" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "visibility" "Visibility" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PracticeSets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PracticeSetTasks" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "visibility" "Visibility" NOT NULL,
    "PracticeSetId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PracticeSetTasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PracticeSetUserSubmitTasks" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "PracticeSetId" TEXT NOT NULL,
    "PracticeSetTaskId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PracticeSetUserSubmitTasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PracticeSets" ADD CONSTRAINT "PracticeSets_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeSetTasks" ADD CONSTRAINT "PracticeSetTasks_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeSetTasks" ADD CONSTRAINT "PracticeSetTasks_PracticeSetId_fkey" FOREIGN KEY ("PracticeSetId") REFERENCES "PracticeSets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeSetUserSubmitTasks" ADD CONSTRAINT "PracticeSetUserSubmitTasks_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeSetUserSubmitTasks" ADD CONSTRAINT "PracticeSetUserSubmitTasks_PracticeSetId_fkey" FOREIGN KEY ("PracticeSetId") REFERENCES "PracticeSets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeSetUserSubmitTasks" ADD CONSTRAINT "PracticeSetUserSubmitTasks_PracticeSetTaskId_fkey" FOREIGN KEY ("PracticeSetTaskId") REFERENCES "PracticeSetTasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
