import { Module } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { PracticeSetService } from '../practiceSet/practiceSet.service';
import { UserPracticeSetResolver } from './userPracticeSet.resolver';
import { UserPracticeSetService } from './userPracticeSet.service';

@Module({
  imports: [],
  providers: [
    AuthService,
    PracticeSetService,
    UserPracticeSetService,
    UserPracticeSetResolver,
  ],
  exports: [],
})
export class UserPracticeSetModule {}
