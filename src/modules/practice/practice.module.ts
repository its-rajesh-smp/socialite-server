import { Module } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { PracticeSetsModule } from './practiceSet/practiceSet.module';
import { PracticeTaskModule } from './task/practiceTask.module';
import { UserPracticeSetModule } from './userPracticeSet/userPracticeSet.module';

@Module({
  imports: [PracticeSetsModule, PracticeTaskModule, UserPracticeSetModule],
  providers: [PrismaService],
  exports: [],
})
export class PracticeModule {}
