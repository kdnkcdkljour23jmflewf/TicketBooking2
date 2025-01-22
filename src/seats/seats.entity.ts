import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Seats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  quantity: number;

  @Column()
  audi: string;
}