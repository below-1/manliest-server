import { 
  Entity, PrimaryGeneratedColumn,
  Column, JoinColumn,
  ManyToOne, OneToMany,
  ManyToMany, JoinTable } from 'typeorm';
import { Jasa } from './Jasa';

@Entity()
export class PaketJasa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: String;

  @ManyToMany(type => Jasa)
  @JoinTable()
  listJasa: Jasa[];
}