import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { ExamsEntity } from './ExamEntity';
import { AppointmentEntity } from './AppointmentEntity';

@Entity('available_times')
export class AvailableTimesEntity {
    @PrimaryGeneratedColumn()
    time_id: number;

    @ManyToOne(() => ExamsEntity, (exam) => exam.availableTimes)
    @JoinColumn({ name: 'exam_id' })
    exam: ExamsEntity;

    @Column({ type: 'time' })
    time: string;

    @OneToMany(() => AppointmentEntity, (appointment) => appointment.time)
    appointments: AppointmentEntity[];
}