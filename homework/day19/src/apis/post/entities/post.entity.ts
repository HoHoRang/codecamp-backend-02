import { Board } from 'src/apis/board/entities/board.entity';
import { FoodType } from 'src/apis/foodType/entities/foodType.entity';
import { Store } from 'src/apis/store/entities/store.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Board)
  board: Board;

  @ManyToOne(() => Store)
  store: Store;

  @ManyToOne(() => FoodType)
  foodType: FoodType;

  @ManyToOne(() => User)
  user: User;

  @Column()
  title: string;

  @Column()
  contents: string;

  @Column()
  likeCount: number;

  @Column()
  dislikeCount: number;

  @Column()
  hitCount: number;

  @Column()
  createDate: Date;

  @Column()
  updateDate: Date;
}
