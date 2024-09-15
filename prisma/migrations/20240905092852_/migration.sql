-- CreateTable
CREATE TABLE "_PracticeTaskToTaskTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PracticeTaskToTaskTag_AB_unique" ON "_PracticeTaskToTaskTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PracticeTaskToTaskTag_B_index" ON "_PracticeTaskToTaskTag"("B");

-- AddForeignKey
ALTER TABLE "_PracticeTaskToTaskTag" ADD CONSTRAINT "_PracticeTaskToTaskTag_A_fkey" FOREIGN KEY ("A") REFERENCES "PracticeTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PracticeTaskToTaskTag" ADD CONSTRAINT "_PracticeTaskToTaskTag_B_fkey" FOREIGN KEY ("B") REFERENCES "TaskTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
