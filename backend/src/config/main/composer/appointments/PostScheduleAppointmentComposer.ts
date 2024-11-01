import { Request, Response } from 'express';
import { AppointmentRepositoryClass } from '../../../repositories/typeorm/AppointmentRepositoryClass';
import  PostScheduleAppointmentUseCase  from '../../../usecases/appointments/PostScheduleAppointmentUseCase'
import { InternalServerError, OK } from '../../../../helpers/HttpResponse';

import logger from '../../../PinoLogger';

interface PostScheduleAppointmentType {
  appointment: {
    specialty: string;
    date: Date;
    comment?: string;
  }
}

const PostScheduleAppointmentsComposer = async(
  HttpRequest: Request,
  HttpResponse: Response
) => {
  try{
    const AppointmentRepository = new AppointmentRepositoryClass();

    const res = await PostScheduleAppointmentUseCase({AppointmentRepository, appointment: HttpRequest.body});

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