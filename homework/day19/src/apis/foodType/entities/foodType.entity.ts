import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FoodType {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  typeName: string;
}
