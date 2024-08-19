import { Module } from '@nestjs/common';
import { PracticeSetsModule } from './practiceSets/practiceSets.module';
import { PracticeSetTaskModule } from './practiceSetTasks/practiceSetTasks.module';
import { PracticeSetUserSubmitTasks } from './practiceSetUserSubmitTasks/practiceSetUserSubmitTasks.module';

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
