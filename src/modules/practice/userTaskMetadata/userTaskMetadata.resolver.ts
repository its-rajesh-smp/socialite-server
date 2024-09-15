import { Resolver } from '@nestjs/graphql';
import { UserTaskMetadataService } from './userTaskMetadata.service';

/**
 * Resolver for user task metadata
 */
@Resolver('UserTaskMetadata')
export class UserTaskMetadataResolver {
  constructor(
    private readonly userTaskMetadataService: UserTaskMetadataService,
  ) {}
}
