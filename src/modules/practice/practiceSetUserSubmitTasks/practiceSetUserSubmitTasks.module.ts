import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PracticeSetTaskService } from '../practiceSetTasks/practiceSetTasks.service';
import { PracticeSetUserSubmitTaskService } from './practiceSetUserSubmitTasks.service';

@Module({
  imports: [],
  providers: [
    AuthService,
    PrismaService,
    PracticeSetTaskService,
    PracticeSetUserSubmitTaskService,
  ],
  exports: [],
})
export class PracticeSetUserSubmitTasks {}
