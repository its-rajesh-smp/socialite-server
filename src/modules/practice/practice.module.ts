import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PracticeSetsModule } from './practiceSet/practiceSet.module';
import { PracticeTaskModule } from './task/practiceTask.module';
import { TaskTagModule } from './taskTag/taskTag.module';
import { UserPracticeSetModule } from './userPracticeSet/userPracticeSet.module';
import { UserSubmitTaskModule } from './userSubmitTask/userSubmitTask.module';
import { UserTaskMetadataModule } from './userTaskMetadata/userTaskMetadata.module';

@Module({
  imports: [
    PracticeSetsModule,
    PracticeTaskModule,
    UserPracticeSetModule,
    UserSubmitTaskModule,
    UserTaskMetadataModule,
    TaskTagModule,
  ],
  providers: [PrismaService],
  exports: [],
})
export class PracticeModule {}
