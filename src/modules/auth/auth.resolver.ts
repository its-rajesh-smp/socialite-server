import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { User } from '../../common/decorators/user.decorator';
import IUser from '../../common/types/user';
import { LoginUserDto, RegisterUserDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import getEnv from 'src/utils/env.helpers';

/**
 * Resolver for user
 */
@Resolver('Auth')
export class AuthorsResolver {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  /**
   * function for login an user
   * @param userData
   * @returns
   */
  @Mutation('loginUser')
  async loginUser(@Args('userData') userData: LoginUserDto) {
    // Checking if user exists
    const user = await this.authService.findOne({ email: userData.email });

    if (!user) {
      throw new Error('User not found');
    }

    // Checking if password is valid
    const isPasswordValid = await compare(userData.password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // Creating access token
    const accessToken = this.jwtService.sign({
      email: user.email,
      password: userData.password,
    });

    return {
      ...user,
      password: userData.password,
      accessToken,
    };
  }

  /**
   * function for register an user
   * @param userData
   * @returns
   */
  @Mutation('registerUser')
  async registerUser(@Args('userData') userData: RegisterUserDto) {
    // Checking if user already exists
    const userExists = await this.authService.findOne({
      email: userData.email,
    });

    if (userExists) {
      throw new Error('User already exists');
    }

    // Hashing password
    const hashedPassword = await hash(
      userData.password,
      Number(getEnv('SALT_ROUNDS')),
    );

    // Creating user
    const user = await this.authService.create({
      ...userData,
      password: hashedPassword,
    });

    // Creating access token
    const accessToken = this.jwtService.sign({
      email: user.email,
      password: userData.password,
    });

    return {
      ...user,
      password: userData.password,
      accessToken,
    };
  }

  /**
   * Function for fetching an user with access token
   * @param req
   * @returns
   */
  @Query('fetchUser')
  @UseGuards(AuthGuard)
  async fetchUserWithAccessToken(@User() user: IUser) {
    return user;
  }
}
