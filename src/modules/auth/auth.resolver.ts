import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { User } from 'src/common/decorators/user.decorator';
import IUser from 'src/common/types/user';
import { LoginUserDto, RegisterUserDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

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
   * @param loginUserData
   * @returns
   */
  @Mutation('loginUser')
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
      password: loginUserData.password,
    });

    return {
      ...user,
      password: loginUserData.password,
      access_token,
    };
  }

  /**
   * function for register an user
   * @param registerUserData
   * @returns
   */
  @Mutation('registerUser')
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
