import { Module } from '@nestjs/common';
import { AuthorsResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  providers: [AuthorsResolver, AuthService, PrismaService],
  exports: [],
})
export class AuthModule {}
