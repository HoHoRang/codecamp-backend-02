import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserGrade {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  gradeName: string;
}
