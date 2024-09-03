import { Module } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';
import { UserTaskMetadataResolver } from './userTaskMetadata.resolver';
import { UserTaskMetadataService } from './userTaskMetadata.service';

@Module({
  imports: [],
  providers: [AuthService, UserTaskMetadataResolver, UserTaskMetadataService],
  exports: [],
})
export class UserTaskMetadataModule {}
