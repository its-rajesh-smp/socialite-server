import { Module } from '@nestjs/common';
import { PracticeSetsModule } from './practiceSets/practiceSets.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PracticeSetsModule],
  providers: [],
  exports: [],
})
export class PracticeModule {}
