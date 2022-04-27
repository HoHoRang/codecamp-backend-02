import { InputType, OmitType } from '@nestjs/graphql';
import { ProductsSaleslocation } from '../entities/productsSaleslocation.entity';

@InputType()
export class ProductsSaleslocationInput extends OmitType(
  ProductsSaleslocation,
  ['id'],
  InputType,
) {
  // 원래 모두 적어야 하지만, PickType, OmitType 등을 활용하여 타입을 재사용
}
