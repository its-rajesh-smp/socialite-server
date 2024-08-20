import { Module } from '@nestjs/common';
import { PracticeSetService } from './practiceSet.service';
import { PracticeSetResolver } from './practiceSet.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/modules/auth/auth.service';

@Module({
  imports: [],
  providers: [
    PracticeSetService,
    PracticeSetResolver,
    PrismaService,
    AuthService,
  ],
  exports: [],
})
export class PracticeSetsModule {}
