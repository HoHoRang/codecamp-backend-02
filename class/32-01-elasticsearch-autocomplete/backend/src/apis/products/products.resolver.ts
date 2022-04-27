import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductsInput } from './dto/createProducts.input';
import { UpdateProductsInput } from './dto/updateProducts.input';
import { Products } from './entities/products.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService, //
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  @Query(() => [Products])
  async fetchProducts(
    @Args('search') search: string, //
  ) {
    // 엘라스틱서치에서 조회 연습하기!!
    const result = await this.elasticsearchService.search({
      index: 'myproduct0222',
      query: {
        match: {
          description: search
        },
      },
    });

    console.log(JSON.stringify(result, null, '  '));

    // 엘라스틱서치에서 조회해보기 위해 임시로 주석!!
    // return this.productsService.findAll();
  }

  @Query(() => Products)
  fetchProduct(@Args('productId') productId: string) {
    return this.productsService.findOne({ productId });
  }

  @Mutation(() => Products)
  async createProducts(
    @Args('createProductsInput') createProductsInput: CreateProductsInput, //
  ) {
    // 엘라스틱서치에서 등록 연습하기!! (실제로는 MySQL에 저장할 예정)
    // await this.elasticsearchService.create({
    //   id: 'myid',
    //   index: 'myproduct',
    //   document: {
    //     name: '철수',
    //     age: 13,
    //     school: '다람쥐초등학교',
    //   },
    // });

    // 엘라스틱서치에서 등록해보기 위해 임시로 주석!!
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
