import { Request, Response } from 'express';
import { AvailableTimeRepositoryClass } from '../../../repositories/typeorm/AvailableTimeRepositoryClass';
import  GetAvailableTimesUseCase  from '../../../usecases/AvailableTimes/GetListAvailableTimesUseCase'
import { InternalServerError, OK } from '../../../../helpers/HttpResponse';

import logger from '../../../PinoLogger';


const GetAvailableTimesComposer = async(
  HttpRequest: Request,
  HttpResponse: Response
) => {
  try{
    const AvailableTimeRepository = new AvailableTimeRepositoryClass();
    const res = await GetAvailableTimesUseCase({ AvailableTimeRepository });

    return OK(HttpResponse, res)

    } catch(error) {
      logger.error({
          error,
          message: `[COMPOSER]: Catch Error (GetAvailableTimesComposer)`,
      });
      return InternalServerError;
  }
}

export default GetAvailableTimesComposer;