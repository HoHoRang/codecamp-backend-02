import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entities/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne({ productId }) {
    return await this.productsRepository.findOne({ where: { id: productId } });
  }

  async create({ createProductsInput }) {
    // 카테고리를 데이터베이스에 저장
    const result = await this.productsRepository.save({
      ...createProductsInput,
      // 하나하나 나열하기
      // name: createProductsInput.name,
      // description: createProductsInput.description,
      // price: createProductsInput.price,
    });

    console.log(result);
    return result;
  }

  async update({ productId, updateProductsInput }) {
    const product = await this.productsRepository.findOne({
      where: { id: productId },
    });

    const newProduct = {
      ...product,
      ...updateProductsInput,

      // id: product.id,
      // name: product.name,
      // dscription: product.description,
      // price: product.price,
      // isSoldout: product.isSoldout,

      // description: updateProductsInput.description
      // price: updateProductsInput.price
    };

    return await this.productsRepository.save(newProduct);
  }

  async checkSoldout({ productId }) {
    const product = await this.productsRepository.findOne({
      where: { id: productId },
    });
    if (product.isSoldout)
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');

    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }
}
