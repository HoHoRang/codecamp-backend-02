import { UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly usersService: UsersService, //
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => String)
  async login(
    @Args('email') email: string,
    @Args('password') password: string, //
  ) {
    // 1. 로그인(이메일과 비밀번호가 일치하는 유저 찾기)
    const user = await this.usersService.findOne({ email });
    // 2. 일치하는 유저가 없으면? 에러
    if (!user)
      throw new UnprocessableEntityException('존재하지 않는 이메일입니다.');

    // 3. 일치하는 유저가 있지만, 암호가 틀렸다면? 에러
    const isAuth = await bcrypt.compare(password, user.password);

    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    // 4. 일치하는 유저가 있으면? accessToken(JWT) 만들어서 프론트엔드로
    return this.authService.getAccessToken({ user });
  }
}
