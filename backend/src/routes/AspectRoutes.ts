import { Router } from 'express';
import GetListExamsComposer from '../config/main/composer/Exams/GetListExamsComposer';
import GetListAppointmentsComposer from '../config/main/composer/Appointments/GetListAppointmentsComposer';
import PostScheduleAppointmentsComposer from '../config/main/composer/Appointments/PostScheduleAppointmentComposer';
import PutDeleteAppointmentsComposer from '../config/main/composer/Appointments/PutDeleteAppointmentComposer';
import GetAvailableTimesComposer from '../config/main/composer/Availabletimes/GetListAvailableTimesComposer';

const router = Router();

router.get('/exams', GetListExamsComposer);

router.get('/availableTimes', GetAvailableTimesComposer)

router.get('/appointments', GetListAppointmentsComposer);

router.post('/appointments', PostScheduleAppointmentsComposer);

router.put('/appointments/:id', PutDeleteAppointmentsComposer);

export default router;