import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PracticeSetResolver } from './practiceSet.resolver';
import { PracticeSetService } from './practiceSet.service';
import { UserPracticeSetService } from '../userPracticeSet/userPracticeSet.service';

@Module({
  imports: [],
  providers: [
    PracticeSetService,
    PracticeSetResolver,
    AuthService,
    UserPracticeSetService,
  ],
  exports: [],
})
export class PracticeSetsModule {}
