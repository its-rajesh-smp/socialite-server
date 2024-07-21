import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './auth.dto';

@Resolver('User')
export class AuthorsResolver {
  constructor(private authService: AuthService) {}

  @Query('login')
  async loginUser(@Args('loginUserData') loginUserData: LoginUserDto) {
    return await this.authService.findOne(loginUserData);
  }

  @Mutation('register')
  async registerUser(
    @Args('registerUserData') registerUserData: RegisterUserDto,
  ) {
    return await this.authService.create(registerUserData);
  }
}
