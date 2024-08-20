import { Module } from '@nestjs/common';
import { PracticeSetsModule } from './practiceSet/practiceSet.module';
import { PracticeSetTaskModule } from './practiceSetTask/practiceSetTask.module';
import { PracticeSetUserSubmitTasks } from './userSubmitTask/userSubmitTask.module';

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
