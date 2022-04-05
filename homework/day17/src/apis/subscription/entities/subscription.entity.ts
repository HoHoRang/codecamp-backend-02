import { Owner } from 'src/apis/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Owner)
  owner: Owner;

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
