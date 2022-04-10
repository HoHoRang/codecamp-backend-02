import { Field, ObjectType } from '@nestjs/graphql';
import { Products } from 'src/apis/products/entities/products.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductsTag {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToMany(() => Products, (products) => products.productsTags)
  @Field(() => [Products])
  products: Products[];
}
