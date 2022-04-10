import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

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

  async create({ createUserInput }) {
    const { userGradeId, ...user } = createUserInput;

    const userInfo = await this.userRepository.findOne({
      where: { userEmail: user.userEmail },
    });

    if (userInfo) throw new ConflictException('이미 등록된 이메일입니다.');

    const result = await this.userRepository.save({
      ...user,
      userGrade: { id: userGradeId },
    });

    return result;
  }

  async update({ userId, updateUserInput }) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    const newUser = {
      ...user,
      ...updateUserInput,
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
}
