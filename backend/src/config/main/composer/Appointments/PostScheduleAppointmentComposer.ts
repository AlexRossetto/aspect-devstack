import { Request, Response } from 'express';
import { AppointmentRepositoryClass } from '../../../repositories/typeorm/AppointmentRepositoryClass';
import  PostScheduleAppointmentUseCase  from '../../../usecases/Appointments/PostScheduleAppointmentUseCase'
import { InternalServerError, OK } from '../../../../helpers/HttpResponse';


import logger from '../../../PinoLogger';

interface PostScheduleAppointmentType {
  appointment: {
    specialty: string;
    date: Date;
    comments?: string;
  }
}

const PostScheduleAppointmentsComposer = async(
  HttpRequest: Request,
  HttpResponse: Response
) => {
  try{
    const AppointmentRepository = new AppointmentRepositoryClass();

    const data = {
      ...HttpRequest.body,
      date: new Date(2024,12,22)
    }

    const res = await PostScheduleAppointmentUseCase({AppointmentRepository, appointment: data});

    return OK(HttpResponse, res)

    } catch(error) {
      logger.error({
          error,
          message: `[COMPOSER]: Catch Error (PostScheduleAppointmentsComposer)`,
      });
      return InternalServerError;
  }
}

export default PostScheduleAppointmentsComposer;