import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('exams')
export class ExamsEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_exam: number;
  
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false})
  specialty: string;
  
}