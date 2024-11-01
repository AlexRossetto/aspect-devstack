import { Request, Response } from 'express';
import { AppointmentRepositoryClass } from '../../../repositories/typeorm/AppointmentRepositoryClass';
import  PutDeleteAppointmentsUseCase  from '../../../usecases/appointments/PutDeleteAppointmentUseCase'
import { InternalServerError, OK } from '../../../../helpers/HttpResponse';


import logger from '../../../PinoLogger';

interface PutDeleteAppointmentComposer {
  appointment: {
    specialty: string;
    date: Date;
    comment?: string;
  }
}

const PutDeleteAppointmentsComposer = async(
  HttpRequest: Request,
  HttpResponse: Response
) => {
  try{
    const AppointmentRepository = new AppointmentRepositoryClass();
    const res = await PutDeleteAppointmentsUseCase({AppointmentRepository,  id_apointment: Number(HttpRequest.params.id)});

    return OK(HttpResponse, res)

    } catch(error) {
      logger.error({
          error,
          message: `[COMPOSER]: Catch Error (PutDeleteAppointmentsComposer)`,
      });
      return InternalServerError;
  }
}

export default PutDeleteAppointmentsComposer;