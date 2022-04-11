import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductsInput } from './dto/createProducts.input';
import { UpdateProductsInput } from './dto/updateProducts.input';
import { Products } from './entities/products.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Products])
  fetchProducts() {
    return this.productsService.findAll();
  }

  @Query(() => Products)
  fetchProduct(@Args('productId') productId: string) {
    return this.productsService.findOne({ productId });
  }

  @Mutation(() => Products)
  createProducts(
    @Args('createProductsInput') createProductsInput: CreateProductsInput, //
  ) {
    return this.productsService.create({ createProductsInput });
  }

  @Mutation(() => Products)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductsInput') updateProductsInput: UpdateProductsInput,
  ) {
    // 판매 완료가 되었는지 확인해보기
    await this.productsService.checkSoldout({ productId });
    // 수정하기
    return await this.productsService.update({
      productId,
      updateProductsInput,
    });
  }

  @Mutation(() => Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productsService.delete({ productId });
  }
}
