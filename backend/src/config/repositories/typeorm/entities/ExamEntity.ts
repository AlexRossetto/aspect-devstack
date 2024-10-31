import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AvailableTimesEntity } from './AvailableTimeEntity';
import { AppointmentEntity } from './AppointmentEntity';

@Entity('exams')
export class ExamsEntity {
    @PrimaryGeneratedColumn()
    exam_id: number;

    @Column({ type: 'varchar', length: 255 })
    exam_name: string;

    @OneToMany(() => AppointmentEntity, (appointment) => appointment.exam)
    appointments: AppointmentEntity[];

    @OneToMany(() => AvailableTimesEntity, (availableTime) => availableTime.exam)
    availableTimes: AvailableTimesEntity[];
}