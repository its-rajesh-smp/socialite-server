import { Module } from '@nestjs/common';
import { PracticeSetTasksModule } from './practiceSetTasks/practice-set-tasks.module';

@Module({
  exports: [],
  imports: [PracticeSetTasksModule],
  providers: [],
})
export class PracticeModule {}
