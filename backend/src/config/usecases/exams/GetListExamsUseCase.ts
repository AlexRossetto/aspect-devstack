import logger from '../../PinoLogger';
import { ExamsRepositoryClass } from '../../repositories/typeorm/ExamsRepositoryClass';

interface GetListExamsType {
  ExamsRepository: ExamsRepositoryClass
}

const GetListExamsUseCase = async({
  ExamsRepository,
}: GetListExamsType) => {
  try {
    const { data } = await ExamsRepository.listExams();

    return { data };
    } catch (error: any) {
        logger.error({
            error,
            message: `[USECASE]: Catch Error (GetListExamsUseCase) `,
        });
        throw new Error(error);
    }
}

export default GetListExamsUseCase;