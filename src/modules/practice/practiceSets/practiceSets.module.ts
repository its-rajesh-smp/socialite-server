import { Module } from '@nestjs/common';
import { PracticeSetService } from './practiceSets.service';
import { PracticeSetResolver } from './practiceSets.resolver';
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
