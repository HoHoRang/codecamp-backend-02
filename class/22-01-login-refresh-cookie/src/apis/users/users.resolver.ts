import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser } from 'src/commons/auth/gql-user.param';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Mutation(() => Users)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('age') age: number,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.usersService.create({ email, hashedPassword, name, age });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => String)
  fetchUser(
    @CurrentUser() currentUser: any, //
  ) {
    console.log('currentUser는?', currentUser);
    console.log('fetchUser 실행 완료');
    return 'SUCCESS';
  }
}
