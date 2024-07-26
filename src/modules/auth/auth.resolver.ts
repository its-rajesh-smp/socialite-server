import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { Request } from 'express';
import { LoginUserDto, RegisterUserDto } from './auth.dto';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Resolver('User')
export class AuthorsResolver {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Mutation('login')
  async loginUser(@Args('loginUserData') loginUserData: LoginUserDto) {
    // Checking if user exists
    const user = await this.authService.findOne({ email: loginUserData.email });

    if (!user) {
      throw new Error('User not found');
    }

    // Checking if password is valid
    const isPasswordValid = await compare(
      loginUserData.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Creating access token
    const access_token = this.jwtService.sign({
      email: user.email,
      password: user.password,
    });

    return {
      ...user,
      password: loginUserData.password,
      access_token,
    };
  }

  @Mutation('register')
  async registerUser(
    @Args('registerUserData') registerUserData: RegisterUserDto,
  ) {
    // Checking if user already exists
    const userExists = await this.authService.findOne({
      email: registerUserData.email,
    });

    if (userExists) {
      throw new Error('User already exists');
    }

    // Hashing password
    const hashedPassword = await hash(
      registerUserData.password,
      Number(process.env.SALT_ROUNDS),
    );

    // Creating user
    const user = await this.authService.create({
      ...registerUserData,
      password: hashedPassword,
    });

    // Creating access token
    const access_token = this.jwtService.sign({
      email: user.email,
      password: registerUserData.password,
    });

    return {
      ...user,
      password: registerUserData.password,
      access_token,
    };
  }

  @Query('fetchUser')
  @UseGuards(AuthGuard)
  async fetchUserWithAccessToken(@Context('req') req: Request) {
    return req.user;
  }
}
