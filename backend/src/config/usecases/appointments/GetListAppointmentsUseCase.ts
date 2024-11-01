import logger from '../../PinoLogger';
import { AppointmentRepositoryClass } from '../../repositories/typeorm/AppointmentRepositoryClass';

interface GetListExamsType {
  AppointmentRepository: AppointmentRepositoryClass
}

const GetListAppointmentsUseCase = async({
  AppointmentRepository,
}: GetListExamsType) => {
  try {
    const { data } = await AppointmentRepository.listAppointments();

    return { data };
    } catch (error: any) {
        logger.error({
            error,
            message: `[USECASE]: Catch Error (GetListAppointmentsUseCase) `,
        });
        throw new Error(error);
    }
}

export default GetListAppointmentsUseCase;