import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find({ relations: ['userGrade'] });
  }

  async findAllWithDeleted() {
    return await this.userRepository.find({
      withDeleted: true,
      relations: ['userGrade'],
    });
  }

  async findOne({ userId }) {
    return await this.userRepository.findOne({
      where: { id: userId },
      relations: ['userGrade'],
    });
  }

  async findOneByEmail({ email }) {
    return await this.userRepository.findOne({ userEmail: email });
  }

  async create({ createUserInput }) {
    const { userGradeId, ...user } = createUserInput;

    console.log('************', userGradeId);

    const userInfo = await this.userRepository.findOne({
      where: { userEmail: user.userEmail },
    });

    if (userInfo) throw new ConflictException('이미 등록된 이메일입니다.');

    const hashedPassword = await bcrypt.hash(user.userPassword, 10);

    let result;

    if (userGradeId) {
      result = await this.userRepository.save({
        ...user,
        userPassword: hashedPassword,
        userGrade: { id: userGradeId },
      });
    } else {
      result = await this.userRepository.save({
        ...user,
        userPassword: hashedPassword,
      });
    }

    return result;
  }

  async update({ userId, updateUserInput }) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    const hashedPassword = await bcrypt.hash(updateUserInput.userPassword, 10);

    const newUser = {
      ...user,
      ...updateUserInput,
      userPassword: hashedPassword,
    };

    return await this.userRepository.save(newUser);
  }

  async checkExist({ userId }) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    if (!user) throw new UnprocessableEntityException('없는 회원입니다.');
  }

  async delete({ userId }) {
    const result = await this.userRepository.softDelete({ id: userId });
    return result.affected ? true : false;
  }

  async restore({ userId }) {
    const result = await this.userRepository.restore({ id: userId });
    return result.affected ? true : false;
  }

  // 2022.04.11 21일차 과제 추가
  async updatePassword({ userId, updatePassword }) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    const hashedPassword = await bcrypt.hash(updatePassword, 10);

    const newUser = {
      ...user,
      userPassword: hashedPassword,
    };

    return await this.userRepository.save(newUser);
  }
}
