import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsCategory } from './entities/productsCategory.entity';

@Injectable()
export class ProductsCategoryService {
  constructor(
    @InjectRepository(ProductsCategory)
    private readonly productsCategoryRepository: Repository<ProductsCategory>,
  ) {}

  async create({ name }) {
    // 카테고리를 데이터베이스에 저장
    const result = await this.productsCategoryRepository.save({ name });
    console.log(result);
    return result;
  }
}
