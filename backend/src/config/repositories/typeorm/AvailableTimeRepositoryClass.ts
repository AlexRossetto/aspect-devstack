import logger from '../../PinoLogger';
import { AppDataSource } from '../../TypeORM/DataSource';
import { AvailableTimesEntity } from './entities/AvailableTimeEntity';

export class AvailableTimeRepositoryClass {
  private availableTime;

  constructor() {
    this.availableTime = AppDataSource.getRepository(AvailableTimesEntity);
  }

  async listAvailableTimes () {
    try {
      const data = await this.availableTime.find({
          relations: ['exam'], 
      });

      return {
        data,
      };
    } catch(error: any) {
      logger.error({
        error,
        message: `[REPOSITORY]:  Catch Error (AvailableTimeRepositoryClass - listAvailableTimes)`,
          });
          throw new Error(error);
      }
    }
  }
