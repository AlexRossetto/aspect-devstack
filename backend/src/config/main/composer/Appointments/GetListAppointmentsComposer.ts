import { Request, Response } from 'express';
import { AppointmentRepositoryClass } from '../../../repositories/typeorm/AppointmentRepositoryClass';
import GetListAppointmentsUseCase from '../../../usecases/Appointments/GetListAppointmentsUseCase';
import { InternalServerError, OK } from '../../../../helpers/HttpResponse';


import logger from '../../../PinoLogger';

const GetListAppointmentsComposer = async(
  HttpRequest: Request,
  HttpResponse: Response
) => {
  try{
    const AppointmentRepository = new AppointmentRepositoryClass();
    const { data } = await GetListAppointmentsUseCase({
      AppointmentRepository
    });

    return OK(HttpResponse, data)

    } catch(error) {
      logger.error({
          error,
          message: `[COMPOSER]: Catch Error (GetListAppointmentsComposer)`,
      });
      return InternalServerError;
  }
}

export default GetListAppointmentsComposer;