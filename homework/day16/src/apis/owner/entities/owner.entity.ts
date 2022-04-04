import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  ownerLoginId: string;

  @Column()
  ownerPassword: string;

  @Column()
  ownerName: string;

  @Column()
  ownerRrn: string;

  @Column()
  ownerPhone: string;

  @Column()
  ownerEmail: string;

  @Column()
  ownerNickname: string;

  @Column()
  ownerJoinDate: Date;

  @Column()
  ownerSubscStatus: boolean;
}
