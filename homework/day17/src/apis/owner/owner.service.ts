import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  async findAll() {
    return await this.ownerRepository.find();
  }

  async findOne({ ownerId }) {
    return await this.ownerRepository.findOne({ where: { id: ownerId } });
  }

  async create({ createOwnerInput }) {
    const result = await this.ownerRepository.save({
      ...createOwnerInput,
    });

    console.log(result);
    return result;
  }

  async update({ ownerId, updateOwnerInput }) {
    const owner = await this.ownerRepository.findOne({
      where: { id: ownerId },
    });

    const newOwner = {
      ...owner,
      ...updateOwnerInput,
    };

    return await this.ownerRepository.save(newOwner);
  }

  async checkExist({ ownerId }) {
    const product = await this.ownerRepository.findOne({
      where: { id: ownerId },
    });
    if (!product) throw new UnprocessableEntityException('없는 회원입니다.');
  }
}
