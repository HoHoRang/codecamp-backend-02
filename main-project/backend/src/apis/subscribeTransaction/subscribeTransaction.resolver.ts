import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-user.param';
import { SubscribeTransaction } from './entities/subscribeTransaction.entity';
import { SubscribeTransactionService } from './subscribeTransaction.service';

@Resolver()
export class SubscribeTransactionResolver {
  constructor(
    private readonly subscribeTransactionService: SubscribeTransactionService,
  ) {}

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => SubscribeTransaction)
  createSubscribeTransaction(
    @Args('impUid') impUid: string,
    @Args('amount') amount: number,
    @Args('productId') productId: string,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    return this.subscribeTransactionService.create({
      impUid,
      amount,
      productId,
      currentUser,
    });
  }
}
