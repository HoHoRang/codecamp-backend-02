import { UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { GqlAuthRefreshGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-user.param';
import { OwnerService } from '../owner/owner.service';
import { OwnerAuthService } from './owner.auth.service';

@Resolver()
export class OwnerAuthResolver {
  constructor(
    private readonly ownerService: OwnerService, //
    private readonly ownerAuthService: OwnerAuthService,
  ) {}

  @Mutation(() => String)
  async OwnerLogin(
    @Args('email') email: string,
    @Args('password') password: string, //
    @Context() context: any,
  ) {
    // 1. 로그인(이메일과 비밀번호가 일치하는 유저 찾기)
    const owner = await this.ownerService.findOneByEmail({
      email,
      provider: 'SITE',
    });
    // 2. 일치하는 유저가 없으면? 에러
    if (!owner)
      throw new UnprocessableEntityException('존재하지 않는 이메일입니다.');

    // 3. 일치하는 유저가 있지만, 암호가 틀렸다면? 에러
    const isAuth = await bcrypt.compare(password, owner.password);

    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    // 4. refreshToken(=JWT)을 만들어서 프론트엔드(쿠키)에 보내주기
    this.ownerAuthService.setRefreshToken({ owner, res: context.res });

    // 5. accessToken(=JWT) 만들어서 프론트엔드에 보내주기
    return this.ownerAuthService.getAccessToken({ owner });
  }

  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String)
  restoreOwnerAccessToken(@CurrentUser() currentUser: ICurrentUser) {
    return this.ownerAuthService.getAccessToken({ owner: currentUser });
  }
}
