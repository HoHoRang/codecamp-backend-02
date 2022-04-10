import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
}
