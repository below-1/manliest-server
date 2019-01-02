import { 
  Entity, PrimaryGeneratedColumn,
  Column, JoinColumn,
  ManyToOne, OneToMany,
  ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Barbermen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;
}