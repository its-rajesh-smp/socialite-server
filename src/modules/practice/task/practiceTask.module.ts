import { Module } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { PrismaService } from '../../prisma/prisma.service';
import { PracticeSetService } from '../practiceSet/practiceSet.service';
import { UserSubmitTaskService } from '../userSubmitTask/userSubmitTask.service';
import { PracticeTaskResolver } from './practiceTask.resolver';
import { PracticeTaskService } from './practiceTask.service';
import { TaskTagService } from '../taskTag/taskTag.service';

@Module({
  imports: [],
  providers: [
    AuthService,
    PrismaService,
    PracticeTaskService,
    PracticeTaskResolver,
    PracticeSetService,
    UserSubmitTaskService,
    TaskTagService,
  ],
  exports: [],
})
export class PracticeTaskModule {}
