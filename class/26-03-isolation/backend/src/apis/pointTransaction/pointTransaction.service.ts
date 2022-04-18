import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
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

    private readonly connection: Connection,
  ) {}

  async create({ impUid, amount, currentUser }) {
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();

    // Transaction 시작!!
    await queryRunner.startTransaction();

    try {
      const pointTransaction = this.pointTransactionRepository.create({
        // 1. pointTransaction 테이블에 거래기록 1줄 생성
        impUid: impUid,
        amount: amount,
        user: currentUser,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      });
      await queryRunner.manager.save(pointTransaction); // await this.pointTransactionRepository.save(pointTransaction);

      // throw new Error('에러발생!!');

      // 2. 유저의 돈 찾아오기
      const user = await this.usersRepository.findOne({ id: currentUser.id });

      // 3. 유저의 돈 업데이트
      // await this.usersRepository.update(
      //   { id: user.id },
      //   { point: user.point + amount },
      // );
      const updatedUser = this.usersRepository.create({
        ...user,
        point: user.point + amount,
      });
      await queryRunner.manager.save(updatedUser); // this.usersRepository.save(updatedUser);

      // commit 성공 확정!!
      await queryRunner.commitTransaction();

      // 4. 최종결과 프론트엔드에 돌려주기
      return pointTransaction;
    } catch (error) {
      // Rollback 되돌리기!!
      await queryRunner.rollbackTransaction();
    } finally {
      // 연결 해제!!
      await queryRunner.release();
    }
  }
}
