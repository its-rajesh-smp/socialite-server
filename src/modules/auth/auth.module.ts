import { Module } from '@nestjs/common';
import { AuthorsResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  providers: [AuthorsResolver, AuthService],
  exports: [],
})
export class AuthModule {}
