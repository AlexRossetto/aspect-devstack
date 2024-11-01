import { Request, Response } from 'express';
import { ExamsRepositoryClass } from '../../../repositories/typeorm/ExamsRepositoryClass';
import GetListExamsUseCase from '../../../usecases/exams/GetListExamsUseCase';
import { InternalServerError, OK } from '../../../../helpers/HttpResponse';


import logger from '../../../PinoLogger';

const GetListExamsComposer = async(
  HttpRequest: Request,
  HttpResponse: Response
) => {
  try{
    const ExamsRepository = new ExamsRepositoryClass();
    const { data } = await GetListExamsUseCase({
      ExamsRepository
    });

    return OK(HttpResponse, data)

    } catch(error) {
      logger.error({
          error,
          message: `[COMPOSER]: Catch Error (GetListExamsComposer)`,
      });
      return InternalServerError(HttpResponse);
  }
}

export default GetListExamsComposer;