import { UserGrade } from 'src/apis/userGrade/entities/userGrade.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => UserGrade)
  userGrade: UserGrade;

  @Column()
  userLoginId: string;

  @Column()
  userPassword: string;

  @Column()
  userName: string;

  @Column()
  userRrn: string;

  @Column()
  userPhone: string;

  @Column()
  userEmail: string;

  @Column()
  userNickname: string;

  @Column()
  userJoinDate: Date;
}
