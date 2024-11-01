import { Router } from 'express';
import GetListExamsComposer from '../config/main/composer/exams/GetListExamsComposer';
import GetListAppointmentsComposer from '../config/main/composer/appointments/GetListAppointmentsComposer';
import PostScheduleAppointmentsComposer from '../config/main/composer/appointments/PostScheduleAppointmentComposer';
import PutDeleteAppointmentsComposer from '../config/main/composer/appointments/PutDeleteAppointmentComposer';
import GetAvailableTimesComposer from '../config/main/composer/availabletimes/GetListAvailableTimesComposer';

const router = Router();

router.get('/exams', GetListExamsComposer);

router.get('/availableTimes', GetAvailableTimesComposer)

router.get('/appointments', GetListAppointmentsComposer);

router.post('/appointments', PostScheduleAppointmentsComposer);

router.put('/appointments/:id', PutDeleteAppointmentsComposer);

export default router;