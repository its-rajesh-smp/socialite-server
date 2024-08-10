import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PracticeSetTaskResolver } from './practiceSetTasks.resolver';
import { PracticeSetTaskService } from './practiceSetTasks.service';

@Module({
  imports: [],
  providers: [
    AuthService,
    PrismaService,
    PracticeSetTaskService,
    PracticeSetTaskResolver,
  ],
  exports: [],
})
export class PracticeSetTaskModule {}
