import { 
  Entity, PrimaryGeneratedColumn,
  Column, JoinColumn,
  ManyToOne, OneToMany,
  ManyToMany, JoinTable } from 'typeorm';
import { Cabang } from './Cabang';
import { User } from './User'

@Entity()
export class Transaksi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column('double')
  nominal: number;

  @Column('timestamp')
  waktu: Date;

  @Column()
  keterangan: string;

  @Column({ type: 'int', nullable: false })
  idCabang: number;

  @Column({ type: 'int', nullable: false })
  idUser: number;

  @ManyToOne(type => Cabang)
  @JoinColumn({ name: 'idCabang' })
  cabang: Cabang;

  @ManyToOne(type => User)
  @JoinColumn({ name: 'idUser' })
  user: User;
}
