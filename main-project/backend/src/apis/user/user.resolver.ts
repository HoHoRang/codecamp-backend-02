import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser } from 'src/commons/auth/gql-user.param';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';

import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  fetchUsers() {
    return this.userService.findAll();
  }

  @Query(() => [User])
  fetchUsersWithDeleted() {
    return this.userService.findAllWithDeleted();
  }

  @Query(() => User)
  async fetchUser(@Args('userId') userId: string) {
    await this.userService.checkExist({ userId });

    return await this.userService.findOne({ userId });
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput, //
  ) {
    return this.userService.create({ createUserInput });
  }

  @Mutation(() => User)
  async updateUser(
    @Args('userId') userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    // 존재하는 회원인지 확인
    await this.userService.checkExist({ userId });
    // 수정하기
    return await this.userService.update({
      userId,
      updateUserInput,
    });
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Args('userId') userId: string, //
  ) {
    return await this.userService.delete({ userId });
  }

  @Mutation(() => Boolean)
  async restoreUser(
    @Args('userId') userId: string, //
  ) {
    return await this.userService.restore({ userId });
  }

  // 2022.04.11 21일차 과제 추가
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  async updateUserPassword(
    @Args('updatePassword') updatePassword: string,
    @CurrentUser() currentUser: any,
  ) {
    return await this.userService.updatePassword({
      userId: currentUser.id,
      updatePassword,
    });
  }

  // 2022.04.11 21일차 과제 추가
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  async fetchLoginUser(@CurrentUser() currentUser: any) {
    return await this.userService.findOne({ userId: currentUser.id });
  }

  // 2022.04.11 21일차 과제 추가
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  async deleteLoginUser(@CurrentUser() currentUser: any) {
    return await this.userService.delete({ userId: currentUser.id });
  }
}
