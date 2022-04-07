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

  async findAllWithDeleted() {
    return await this.ownerRepository.find({ withDeleted: true });
  }

  async findOne({ ownerId }) {
    return await this.ownerRepository.findOne({
      where: { id: ownerId },
      withDeleted: true,
    });
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

  async delete({ ownerId }) {
    const result = await this.ownerRepository.softDelete({ id: ownerId });
    return result.affected ? true : false;
  }

  async restore({ ownerId }) {
    const result = await this.ownerRepository.restore({ id: ownerId });
    return result.affected ? true : false;
  }
}
