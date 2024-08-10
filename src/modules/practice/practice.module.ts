import { Module } from '@nestjs/common';
import { PracticeSetsModule } from './practiceSets/practiceSets.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PracticeSetTaskModule } from './practiceSetTasks/practiceSetTasks.module';

@Module({
  imports: [PracticeSetsModule, PracticeSetTaskModule],
  providers: [],
  exports: [],
})
export class PracticeModule {}
