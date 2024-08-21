import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PracticeTaskResolver } from './practiceTask.resolver';
import { PracticeTaskService } from './practiceTask.service';

@Module({
  imports: [],
  providers: [
    AuthService,
    PrismaService,
    PracticeTaskService,
    PracticeTaskResolver,
  ],
  exports: [],
})
export class PracticeTaskModule {}
