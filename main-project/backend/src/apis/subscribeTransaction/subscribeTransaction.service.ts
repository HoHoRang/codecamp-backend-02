import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
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
      // 1. subscribeTransaction 테이블에 거래기록 1줄 생성
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

  async createCancel({ impUid, amount, productId, currentUser }) {
    const cancelTransaction = this.subscribeTransactionRepository.create({
      impUid: impUid,
      amount: -amount,
      owner: currentUser,
      product: {
        id: productId,
      },
      status: SUBSCRIBE_TRANSACTION_STATUS_ENUM.CANCEL,
    });
    await this.subscribeTransactionRepository.save(cancelTransaction);

    return cancelTransaction;
  }

  async checkExist({ impUid }) {
    const subscribeTransaction =
      await this.subscribeTransactionRepository.findOne({
        impUid: impUid,
        status: SUBSCRIBE_TRANSACTION_STATUS_ENUM.PAYMENT,
      });
    if (subscribeTransaction)
      throw new ConflictException('이미 등록된 결제건입니다!');

    return true;
  }

  async checkCancelExist({ impUid }) {
    const subscribeTransaction =
      await this.subscribeTransactionRepository.findOne({
        impUid: impUid,
        status: SUBSCRIBE_TRANSACTION_STATUS_ENUM.CANCEL,
      });
    if (subscribeTransaction)
      throw new UnprocessableEntityException('이미 취소된 결제건입니다!');

    return true;
  }

  async checkPaymentExist({ impUid, amount }) {
    const paymentInfo = await this.subscribeTransactionRepository.findOne({
      where: {
        impUid: impUid,
        status: SUBSCRIBE_TRANSACTION_STATUS_ENUM.PAYMENT,
      },
      relations: ['product', 'owner'],
    });

    if (!paymentInfo) {
      throw new UnprocessableEntityException(
        '해당 impUid로 결제된 결제건이 없습니다!',
      );
    } else {
      if (paymentInfo.amount !== amount) {
        throw new UnprocessableEntityException('결제취소 금액이 다릅니다!');
      }
    }
    return paymentInfo;
  }
}
