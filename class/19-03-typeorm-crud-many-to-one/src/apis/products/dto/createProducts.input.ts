import { Field, InputType, Int } from '@nestjs/graphql';
import { ProductsSaleslocationInput } from 'src/apis/productsSaleslocation/dto/productsSaleslocation.input';

@InputType()
export class CreateProductsInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  price: number;

  @Field(() => ProductsSaleslocationInput)
  productsSaleslocation: ProductsSaleslocationInput;

  @Field(() => String)
  productsCategoryId: string;
}
