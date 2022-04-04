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
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isSoldout: boolean;
  // soldedAt: Date;

  @JoinColumn()
  @OneToOne(() => ProductsSaleslocation)
  productsSaleslocation: ProductsSaleslocation;

  @ManyToOne(() => ProductsCategory)
  productsCategory: ProductsCategory;

  @ManyToOne(() => Users)
  users: Users;

  @JoinTable()
  @ManyToMany(() => ProductsTag, (productsTags) => productsTags.products)
  productsTags: ProductsTag[];
}
