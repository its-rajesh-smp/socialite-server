import { Module } from '@nestjs/common';
import { ReactionResolver } from './reaction.resolver';
import { ReactionService } from './reaction.service';
import { AuthService } from 'src/modules/auth/auth.service';

@Module({
  imports: [],
  providers: [AuthService, ReactionResolver, ReactionService],
  exports: [],
})
export class ReactionModule {}
