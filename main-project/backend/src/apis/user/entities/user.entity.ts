import { Field, ObjectType } from '@nestjs/graphql';
import { UserGrade } from 'src/apis/userGrade/entities/userGrade.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: number;

  @Column()
  @Field(() => String)
  userName: string;

  @Column()
  @Field(() => String)
  userEmail: string;

  @Column()
  @Field(() => String)
  userPhone: string;

  @Column()
  //@Field(() => String)
  userPassword: string;

  @Column({ nullable: true })
  @Field(() => String)
  userLoginId: string;

  @Column({ nullable: true })
  @Field(() => String)
  userRrn: string;

  @Column({ nullable: true })
  @Field(() => String)
  userNickname: string;

  @Column()
  @Field(() => String)
  provider: string;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  @Field(() => Date)
  userJoinDate: Date;

  @ManyToOne(() => UserGrade)
  @Field(() => UserGrade)
  userGrade: UserGrade;

  @DeleteDateColumn()
  deletedAt: Date;
}
