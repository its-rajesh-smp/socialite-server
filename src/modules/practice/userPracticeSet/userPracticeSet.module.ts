import { Module } from '@nestjs/common';
import { PracticeSetService } from '../practiceSet/practiceSet.service';
import { UserPracticeSetResolver } from './userPracticeSet.resolver';
import { UserPracticeSetService } from './userPracticeSet.service';
import { AuthService } from 'src/modules/auth/auth.service';

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
