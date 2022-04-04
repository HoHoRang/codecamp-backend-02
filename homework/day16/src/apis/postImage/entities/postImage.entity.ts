import { Post } from 'src/apis/post/entities/post.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostImage {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Post)
  post: Post;

  @Column()
  url: string;

  @Column()
  createDate: Date;
}
