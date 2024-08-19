import { Module } from '@nestjs/common';
import { PracticeSetsModule } from './practiceSet/practiceSets.module';
import { PracticeSetTaskModule } from './practiceSetTask/practiceSetTasks.module';
import { PracticeSetUserSubmitTasks } from './userPracticeTask/userPracticeTasks.module';

@Module({
  imports: [
    PracticeSetsModule,
    PracticeSetTaskModule,
    PracticeSetUserSubmitTasks,
  ],
  providers: [],
  exports: [],
})
export class PracticeModule {}
