import { Owner } from 'src/apis/owner/entities/owner.entity';
import { Product } from 'src/apis/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Owner)
  owner: Owner;

  @ManyToOne(() => Product)
  product: Product;

  @Column()
  payPrice: number;

  @Column()
  payType: string;

  @Column()
  payDate: Date;

  @Column()
  subscStartDate: Date;

  @Column()
  subscEndDate: Date;
}
