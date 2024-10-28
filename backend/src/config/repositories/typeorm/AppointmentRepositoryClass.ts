import logger from '../../PinoLogger';
import { AppDataSource } from '../../TypeORM/DataSource';
import { AppointmentEntity } from './entities/AppointmentEntity';

interface DeleteAppointmentType {
  id: number;
}

interface ScheduleAppointmentType {
  specialty: string;
  date: Date;
  comments?: string;
}

export class AppointmentRepositoryClass {
  private appointment; 

  constructor () {
    this.appointment = AppDataSource.getRepository(AppointmentEntity);
  }


  async listAppointments() {
  try {
    const [data] = await this.appointment.findAndCount();

    return {
      data,
    };
  } catch(error: any) {
    logger.error({
      error,
      message: `[REPOSITORY]:  Catch Error (AppointmentRepositoryClass - listAppointments)`,
        });
      throw new Error(error);
    }
  }


  async scheduleAppointment(data  : ScheduleAppointmentType) {
    try {
      const res = await this.appointment.create(data);

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