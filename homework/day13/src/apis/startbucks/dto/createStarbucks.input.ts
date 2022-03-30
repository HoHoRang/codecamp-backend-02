import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStarbucksInput {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  price: number;

  @Field(() => Number)
  calorie: number;

  @Field(() => Number)
  fat: number;

  @Field(() => Number)
  protein: number;

  @Field(() => Number)
  sodium: number;

  @Field(() => Number)
  sugar: number;

  @Field(() => Number)
  caffein: number;
}
