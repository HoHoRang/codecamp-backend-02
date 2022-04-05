import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductsInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  price: number;
}
