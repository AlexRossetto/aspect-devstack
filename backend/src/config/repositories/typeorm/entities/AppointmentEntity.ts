import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('appointment')
export class AppointmentEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_appointment: number;
  
  @Column({ type: 'varchar', nullable: false})
  specialty: string;

  @Column({ type: 'date', nullable: false })
  date: Date;

  @Column({ type: 'varchar', nullable: true})
  comments: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;
  
}