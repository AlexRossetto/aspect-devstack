import logger from '../../PinoLogger';
import { AvailableTimeRepositoryClass } from '../../repositories/typeorm/AvailableTimeRepositoryClass';

interface GetListAvailableTimesRepositoryType {
  AvailableTimeRepository: AvailableTimeRepositoryClass
}

const GetListAvailableTimesUseCase = async({
  AvailableTimeRepository,
}: GetListAvailableTimesRepositoryType) => {
  try {
    const { data } = await AvailableTimeRepository.listAvailableTimes();

    return { data };
    } catch (error: any) {
        logger.error({
            error,
            message: `[USECASE]: Catch Error (GetListAvailableTimesUseCase) `,
        });
        throw new Error(error);
    }
}

export default GetListAvailableTimesUseCase;