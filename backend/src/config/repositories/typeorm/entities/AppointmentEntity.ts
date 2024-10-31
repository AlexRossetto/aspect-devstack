import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AvailableTimesEntity } from './AvailableTimeEntity';
import { ExamsEntity } from './ExamEntity';

@Entity('appointments')
export class AppointmentEntity {
    @PrimaryGeneratedColumn()
    appointment_id: number;

    @ManyToOne(() => AvailableTimesEntity, (availableTime) => availableTime.appointments)
    @JoinColumn({ name: 'time_id' })
    time: AvailableTimesEntity;

    @Column({ type: 'int' })
    user_id: number;

    @ManyToOne(() => ExamsEntity, (exam) => exam.appointments)
    @JoinColumn({ name: 'exam_id' })
    exam: ExamsEntity;

    @Column({ type: 'date' })
    appointment_date: Date;

    @Column({ type: 'varchar', nullable: true })
    comment: string;
}