import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import {
  SubscribeTransaction,
  SUBSCRIBE_TRANSACTION_STATUS_ENUM,
} from './entities/subscribeTransaction.entity';

@Injectable()
export class SubscribeTransactionService {
  constructor(
    @InjectRepository(SubscribeTransaction)
    private readonly subscribeTransactionRepository: Repository<SubscribeTransaction>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ impUid, amount, productId, currentUser }) {
    const today = new Date();
    const end = new Date();
    new Date(end.setMonth(end.getMonth() + 1));

    const subscribeTransaction = this.subscribeTransactionRepository.create({
      // 1. pointTransaction 테이블에 거래기록 1줄 생성
      impUid: impUid,
      amount: amount,
      owner: currentUser,
      product: {
        id: productId,
      },
      status: SUBSCRIBE_TRANSACTION_STATUS_ENUM.PAYMENT,
      subscriptionStartDate: today,
      subscriptionEndDate: end,
    });
    await this.subscribeTransactionRepository.save(subscribeTransaction);

    // 2. 최종결과 프론트엔드에 돌려주기
    return subscribeTransaction;
  }
}
