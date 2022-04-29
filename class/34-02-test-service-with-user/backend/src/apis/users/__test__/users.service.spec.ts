import { ConflictException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { UsersService } from '../users.service';

class MockUserRepository {
  mydb = [{ email: 'a@a.com', password: '0000', name: '짱구', age: 8 }];

  findOne({ email }) {
    const users = this.mydb.filter((el) => el.email === email);
    if (users.length) return users[0];
    return null;
  }

  save({ email, password, name, age }) {
    this.mydb.push({ email, password, name, age });
    return { email, password, name, age };
  }
}

describe('UserService', () => {
  let userService: UsersService;

  beforeEach(async () => {
    const userModule = await Test.createTestingModule({
      providers: [
        UsersService, //
        {
          provide: getRepositoryToken(Users),
          useClass: MockUserRepository,
        },
      ],
    }).compile();

    userService = userModule.get<UsersService>(UsersService);
  });

  describe('create', () => {
    it('이미 존재하는 이메일 검증하기!', async () => {
      const myData = {
        email: 'a@a.com',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };
      try {
        await userService.create({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
      }
    });

    it('회원 등록이 잘 됐는지 검증!', async () => {
      const myData = {
        email: 'bbb@bbb.com',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };

      const myResultData = {
        email: 'bbb@bbb.com',
        password: '1234',
        name: '철수',
        age: 13,
      };

      const result = await userService.create({ ...myData });
      expect(result).toStrictEqual(myResultData);
    });
  });

  describe('findOne', () => {});
});
