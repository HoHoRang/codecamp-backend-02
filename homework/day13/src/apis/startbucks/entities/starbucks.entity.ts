import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Starbucks {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  number: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Number)
  price: number;

  @Column()
  @Field(() => Number)
  calorie: number;

  @Column()
  @Field(() => Number)
  fat: number;

  @Column()
  @Field(() => Number)
  protein: number;

  @Column()
  @Field(() => Number)
  sodium: number;

  @Column()
  @Field(() => Number)
  sugar: number;

  @Column()
  @Field(() => Number)
  caffein: number;
}
