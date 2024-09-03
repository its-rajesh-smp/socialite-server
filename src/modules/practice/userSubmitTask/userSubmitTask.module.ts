import { Module } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { PracticeTaskService } from '../task/practiceTask.service';
import { UserPracticeSetService } from '../userPracticeSet/userPracticeSet.service';
import { UserTaskMetadataService } from '../userTaskMetadata/userTaskMetadata.service';
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
    UserTaskMetadataService,
  ],
  exports: [],
})
export class UserSubmitTaskModule {}
