import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('exams')
export class ExamsEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_exam: number;
  
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false})
  specialty: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;
  
}