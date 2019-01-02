import { 
  Entity, PrimaryGeneratedColumn,
  Column, JoinColumn,
  ManyToOne, OneToMany,
  ManyToMany, JoinTable } from 'typeorm';
import { Item } from './Item';
import { Transaksi } from './Transaksi';

@Entity()
export class MutasiItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jumlah: number;

  @Column({ type: 'int', nullable: false })
  idItem: number;

  @Column({ type: 'int', nullable: false })
  idTransaksi: number;

  @ManyToOne(type => Item)
  @JoinColumn({ name: 'idItem' })
  item: Item;

  @ManyToOne(type => Transaksi)
  @JoinColumn({ name: 'idTransaksi' })
  transaksi: Transaksi;
}