import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PracticeTaskResolver } from './practiceTask.resolver';
import { PracticeTaskService } from './practiceTask.service';
import { PracticeSetService } from '../practiceSet/practiceSet.service';

@Module({
  imports: [],
  providers: [
    AuthService,
    PrismaService,
    PracticeTaskService,
    PracticeTaskResolver,
    PracticeSetService,
  ],
  exports: [],
})
export class PracticeTaskModule {}
