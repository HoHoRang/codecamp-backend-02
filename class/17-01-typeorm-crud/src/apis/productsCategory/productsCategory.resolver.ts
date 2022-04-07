import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductsCategory } from './entities/productsCategory.entity';
import { ProductsCategoryService } from './productsCategory.service';

@Resolver()
export class ProductsCategoryResolver {
  constructor(
    private readonly productsCategoryService: ProductsCategoryService,
  ) {}

  @Mutation(() => ProductsCategory)
  createProductsCategory(
    @Args('name') name: string, //
  ) {
    return this.productsCategoryService.create({ name });
  }
}
