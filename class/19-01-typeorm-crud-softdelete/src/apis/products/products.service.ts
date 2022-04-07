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

  async delete({ productId }) {
    // // 1. 실제 삭제
    // const result = await this.productsRepository.delete({ id: productId });
    // return result.affected ? true : false;

    // // 2. 소프트 삭제(직접 구현) - isDeleted
    // this.productsRepository.update({ id: productId }, { isDeleted: true });

    // // 3. 소프트 삭제(직접 구현) - deletedAt
    // this.productsRepository.update(
    //   { id: productId },
    //   { deletedAt: new Date() },
    // );

    // // 4. 소프트 삭제(TypeORM 제공) - softRemove
    // this.productsRepository.softRemove({ id: productId }); // id로만 삭제 가능

    // 5. 소프트 삭제(TypeORM 제공) - softDelete
    const result = await this.productsRepository.softDelete({ id: productId }); // 다양한 조건으로 삭제 가능
    console.log(result);
    return result.affected ? true : false;
  }
}
