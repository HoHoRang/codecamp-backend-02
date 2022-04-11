import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductsInput } from './createProducts.input';

@InputType()
export class UpdateProductsInput extends PartialType(CreateProductsInput) {}
