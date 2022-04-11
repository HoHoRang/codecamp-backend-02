import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Board } from 'src/apis/board/entities/board.entity';
import { FoodType } from 'src/apis/foodType/entities/foodType.entity';
import { Store } from 'src/apis/store/entities/store.entity';
import { Tag } from 'src/apis/tag/entities/tag.entity';
import { User } from 'src/apis/user/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: number;

  @ManyToOne(() => Board)
  @Field(() => Board)
  board: Board;

  @ManyToOne(() => Store)
  @Field(() => Store)
  store: Store;

  @ManyToOne(() => FoodType)
  @Field(() => FoodType)
  foodType: FoodType;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.posts)
  @Field(() => [Tag])
  tags: Tag[];

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;

  @Column({ default: () => 0 })
  @Field(() => Int)
  likeCount: number;

  @Column({ default: () => 0 })
  @Field(() => Int)
  dislikeCount: number;

  @Column({ default: () => 0 })
  @Field(() => Int)
  hitCount: number;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  @Field(() => Date)
  createDate: Date;

  @Column({
    nullable: true,
    type: 'timestamp',
  })
  @Field(() => Date, { nullable: true })
  updateDate: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
