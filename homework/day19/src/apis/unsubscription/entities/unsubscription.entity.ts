import { Subscription } from 'src/apis/subscription/entities/subscription.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Unsubscription {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @JoinColumn()
  @OneToOne(() => Subscription)
  subscPayment: Subscription;

  @Column()
  refundDate: Date;

  @Column()
  refundCompleteDate: Date;
}
