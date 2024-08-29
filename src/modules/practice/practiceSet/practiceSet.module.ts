import { Module } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { UserPracticeSetService } from '../userPracticeSet/userPracticeSet.service';
import { PracticeSetResolver } from './practiceSet.resolver';
import { PracticeSetService } from './practiceSet.service';

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
