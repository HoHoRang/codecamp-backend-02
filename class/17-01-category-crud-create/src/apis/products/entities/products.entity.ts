import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductsCategory } from 'src/apis/productsCategory/entities/productsCategory.entity';
import { ProductsSaleslocation } from 'src/apis/productsSaleslocation/entities/productsSaleslocation.entity';
import { ProductsTag } from 'src/apis/productsTag/entities/productsTag.entity';
import { Users } from 'src/apis/users/entities/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;
  // soldedAt: Date;

  @JoinColumn()
  @OneToOne(() => ProductsSaleslocation)
  @Field(() => ProductsSaleslocation)
  productsSaleslocation: ProductsSaleslocation;

  @ManyToOne(() => ProductsCategory)
  @Field(() => ProductsCategory)
  productsCategory: ProductsCategory;

  @ManyToOne(() => Users)
  @Field(() => Users)
  users: Users;

  @JoinTable()
  @ManyToMany(() => ProductsTag, (productsTags) => productsTags.products)
  @Field(() => [ProductsTag])
  productsTags: ProductsTag[];
}
