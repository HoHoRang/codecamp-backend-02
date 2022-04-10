import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Mutation(() => Users)
  createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('age') age: number,
  ) {
    return this.usersService.create({ email, password, name, age });
  }
}
