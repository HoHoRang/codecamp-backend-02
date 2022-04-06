import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: number;

  @Column()
  @Field(() => String)
  ownerLoginId: string;

  @Column()
  @Field(() => String)
  ownerPassword: string;

  @Column()
  @Field(() => String)
  ownerName: string;

  @Column()
  @Field(() => String)
  ownerRrn: string;

  @Column()
  @Field(() => String)
  ownerPhone: string;

  @Column()
  @Field(() => String)
  ownerEmail: string;

  @Column()
  @Field(() => String)
  ownerNickname: string;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  @Field(() => Date)
  ownerJoinDate: Date;

  @Column({ default: false })
  @Field(() => Boolean)
  ownerSubscStatus: boolean;
}
