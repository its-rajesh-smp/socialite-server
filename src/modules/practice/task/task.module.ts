import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PracticeSetTaskResolver } from './task.resolver';
import { PracticeSetTaskService } from './task.service';

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
