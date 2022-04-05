import { Owner } from 'src/apis/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Owner)
  owner: Owner;

  @Column()
  storeName: string;

  @Column()
  address: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  category: string;

  @Column()
  createDate: Date;
}
