import logger from '../../PinoLogger';
import { AppointmentRepositoryClass } from '../../repositories/typeorm/AppointmentRepositoryClass';

interface PutDeleteAppointmentType {
  AppointmentRepository: AppointmentRepositoryClass,
  id_apointment: number;
}

const PutDeleteAppointmentUseCase = async({
  AppointmentRepository,
  id_apointment
}: PutDeleteAppointmentType) => {
  try {
    const res = await AppointmentRepository.deleteAppointment({ id: id_apointment });

    return res;
    } catch (error: any) {
        logger.error({
            error,
            message: `[USECASE]: Catch Error (PutDeleteAppointmentUseCase) `,
        });
        throw new Error(error);
    }
}

export default PutDeleteAppointmentUseCase;