import { 
  Entity, PrimaryGeneratedColumn,
  Column, JoinColumn,
  ManyToOne, OneToMany,
  ManyToMany, JoinTable } from 'typeorm';
import { Cabang } from './Cabang';
import { PaketJasa } from './PaketJasa';
import { Barbermen } from './Barbermen';
import { User } from './User';

enum SesiState {
  SCHEDULED,
  ONGOING,
  DONE,
  CANCELED
}

@Entity()
export class Sesi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp')
  scheduledStartTime: Date;

  @Column('timestamp')
  scheduledEndTime: Date;

  @Column('timestamp')
  executionStartTime: Date;

  @Column('timestamp')
  executionEndTime: Date;

  @Column('enum', { enum: SesiState })
  state: SesiState;

  @Column({ type: 'int', nullable: false })
  idCabang: number;

  @ManyToOne(type => Cabang)
  @JoinColumn({ name: 'idCabang' })
  cabang: Cabang;

  @Column({ type: 'int', nullable: false })
  idBarbermen: number;

  @ManyToOne(type => Barbermen)
  @JoinColumn({ name: 'idBarbermen' })
  barbermen: Barbermen;

  @Column({ type: 'int', nullable: false })
  idUser: number;

  @ManyToOne(type => User)
  @JoinColumn({ name: 'idUser' })
  user: User;
}