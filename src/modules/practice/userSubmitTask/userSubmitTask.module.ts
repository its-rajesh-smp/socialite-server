import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { PracticeTaskService } from '../task/practiceTask.service';
import { UserPracticeSetService } from '../userPracticeSet/userPracticeSet.service';
import { UserSubmitTaskResolver } from './userSubmitTask.resolver';
import { UserSubmitTaskService } from './userSubmitTask.service';

@Module({
  imports: [],
  providers: [
    AuthService,
    UserSubmitTaskService,
    UserSubmitTaskResolver,
    UserPracticeSetService,
    PracticeTaskService,
  ],
  exports: [],
})
export class UserSubmitTaskModule {}
