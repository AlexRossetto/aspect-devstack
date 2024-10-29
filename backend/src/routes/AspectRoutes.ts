import { Router } from 'express';
import GetListExamsComposer from '../config/main/composer/Exams/GetListExamsComposer';
import GetListAppointmentsComposer from '../config/main/composer/Appointments/GetListAppointmentsComposer';
import PostScheduleAppointmentsComposer from '../config/main/composer/Appointments/PostScheduleAppointmentComposer';
import PutDeleteAppointmentsComposer from '../config/main/composer/Appointments/PutDeleteAppointmentComposer';

const router = Router();

router.get('/exams', GetListExamsComposer);

router.get('/appointments', GetListAppointmentsComposer);

router.post('/appointments', PostScheduleAppointmentsComposer);

router.put('/appointments/:id', PutDeleteAppointmentsComposer);

export default router;