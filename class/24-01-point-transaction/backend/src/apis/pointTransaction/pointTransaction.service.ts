import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../users/entities/users.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';

@Injectable()
export class PointTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,

    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async create({ impUid, amount, currentUser }) {
    const pointTransaction = this.pointTransactionRepository.create({
      // 1. pointTransaction 테이블에 거래기록 1줄 생성
      impUid: impUid,
      amount: amount,
      user: currentUser,
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    });
    await this.pointTransactionRepository.save(pointTransaction);

    // 2. 유저의 돈 찾아오기
    const user = await this.usersRepository.findOne({ id: currentUser.id });

    // 3. 유저의 돈 업데이트
    await this.usersRepository.update(
      { id: user.id },
      { point: user.point + amount },
    );

    // 4. 최종결과 프론트엔드에 돌려주기
    return pointTransaction;
  }
}
