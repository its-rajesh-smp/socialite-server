import { Module } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';

@Module({
  imports: [],
  providers: [AuthService],
  exports: [],
})
export class FeedModule {}
