import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req as Request;

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      // Checking if token is valid
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.secret,
      });

      if (!payload?.email) {
        throw new UnauthorizedException();
      }
      console.log(payload);

      // Checking if user exists
      const user = await this.authService.findOne({ email: payload.email });

      // Checking if password is valid
      const isPasswordValid = await compare(payload.password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedException();
      }
      // Adding user to request
      request['user'] = { ...user, access_token: token };
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}
