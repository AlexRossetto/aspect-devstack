import logger from '../../PinoLogger';
import { AppointmentRepositoryClass } from '../../repositories/typeorm/AppointmentRepositoryClass';

interface PostScheduleAppointmentType {
  AppointmentRepository: AppointmentRepositoryClass,
  appointment: {
    specialty: string;
    date: Date;
    comments?: string;
  }
}

const PostScheduleAppointmentUseCase = async({
  AppointmentRepository,
  appointment
}: PostScheduleAppointmentType) => {
  try {
    const res = await AppointmentRepository.scheduleAppointment(appointment);

    return res;
    } catch (error: any) {
        logger.error({
            error,
            message: `[USECASE]: Catch Error (PostScheduleAppointmentUseCase) `,
        });
        throw new Error(error);
    }
}

export default PostScheduleAppointmentUseCase;