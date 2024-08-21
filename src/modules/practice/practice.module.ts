import { Module } from '@nestjs/common';
import { PracticeSetsModule } from './practiceSet/practiceSet.module';
import { PracticeTaskModule } from './task/practiceTask.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PracticeSetsModule, PracticeTaskModule],
  providers: [PrismaService],
  exports: [],
})
export class PracticeModule {}
