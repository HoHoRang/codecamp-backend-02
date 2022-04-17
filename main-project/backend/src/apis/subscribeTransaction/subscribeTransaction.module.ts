import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IamportService } from '../iamport/iamport.service';
import { User } from '../user/entities/user.entity';
import { SubscribeTransaction } from './entities/subscribeTransaction.entity';
import { SubscribeTransactionResolver } from './subscribeTransaction.resolver';
import { SubscribeTransactionService } from './subscribeTransaction.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubscribeTransaction, //
      User,
    ]),
  ],
  providers: [
    SubscribeTransactionResolver, //
    SubscribeTransactionService,
    IamportService,
  ],
})
export class SubscribeTransactionModule {}
