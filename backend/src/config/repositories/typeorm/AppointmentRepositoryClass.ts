import logger from '../../PinoLogger';
import { AppDataSource } from '../../typeorm/DataSource';
import { AppointmentEntity } from './entities/AppointmentEntity';

interface DeleteAppointmentType {
  id: number;
}

interface ScheduleAppointmentType {
  time_id: number
  user_id: number
  appointment_date: Date
  exam_id: number
  comment?: string
}

export class AppointmentRepositoryClass {
  private appointment; 

  constructor () {
    this.appointment = AppDataSource.getRepository(AppointmentEntity);
  }

  async listAppointments() {
  try {
      const appointments = await this.appointment.find({
        relations: ['exam', 'time'], 
    });

   const data = appointments.map(appointment => ({
        appointment_id: appointment.appointment_id,
        user_id: appointment.user_id,
        time: appointment.time,
        appointment_date: appointment.appointment_date,
        comments: appointment.comment,
        exam_name: appointment.exam ? appointment.exam.exam_name : null,
    }));

    return {
      data
    }
  } catch(error: any) {
    logger.error({
      error,
      message: `[REPOSITORY]:  Catch Error (AppointmentRepositoryClass - listAppointments)`,
        });
      throw new Error(error);
    }
  }


  async scheduleAppointment(data : ScheduleAppointmentType) {
    try {
      const res = await this.appointment.save({
        user_id: data.user_id,
        appointment_date: data.appointment_date,
        comment: data.comment,
        exam: { exam_id: data.exam_id },
        time: { time_id: data.time_id }
      })
      return {
        res,
      };
    } catch(error: any) {
      logger.error({
        error,
        message: `[REPOSITORY]:  Catch Error (AppointmentRepositoryClass - scheduleAppointment)`,
          });
        throw new Error(error);
      }
    }

  async deleteAppointment({id: id_appointment} : DeleteAppointmentType) {
    try {
      const res = await this.appointment.delete(id_appointment);

      return {
        res,
      };
    } catch(error: any) {
        logger.error({
          error,
          message: `[REPOSITORY]:  Catch Error (AppointmentRepositoryClass - deleteAppointment)`,
            });
          throw new Error(error);
      }
    }
  }