import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PracticeSetResolver } from './practiceSet.resolver';
import { PracticeSetService } from './practiceSet.service';

@Module({
  imports: [],
  providers: [PracticeSetService, PracticeSetResolver, AuthService],
  exports: [],
})
export class PracticeSetsModule {}
