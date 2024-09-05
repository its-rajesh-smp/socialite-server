import { Module } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { TaskTagResolver } from './taskTag.resolver';
import { TaskTagService } from './taskTag.service';

@Module({
  imports: [],
  providers: [AuthService, TaskTagService, TaskTagResolver],
  exports: [],
})
export class TaskTagModule {}
