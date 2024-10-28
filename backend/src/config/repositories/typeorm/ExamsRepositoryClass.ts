import logger from '../../PinoLogger';
import { AppDataSource } from '../../TypeORM/DataSource';
import { ExamsEntity } from './entities/ExamEntity';

export class ExamsRepositoryClass {
  private exam;

  constructor() {
    this.exam = AppDataSource.getRepository(ExamsEntity);
  }

  async listExams () {
    try {
      const [data] = await this.exam.findAndCount();

      return {
        data,
      };
    } catch(error: any) {
      logger.error({
        error,
        message: `[REPOSITORY]:  Catch Error (ExamsRepositoryClass - listExams)`,
          });
          throw new Error(error);
      }
    }
  }
