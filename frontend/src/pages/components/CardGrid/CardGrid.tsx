import { useEffect, useState } from 'react';
import Card from '../AppointmentCard/AppointmentCard';
import { Box, Modal, Typography, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MedicationIcon from '@mui/icons-material/Medication';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useAppointmentContext } from '../../../helpers/functions/useAppointmentContext';
import { format, parseISO } from 'date-fns'
import api from '../../../services/api';
import { AppointmentType } from './types';
import { groupAppointmentsByDate } from './helpers/functions';
import { 
  appointmentsContainerStyle,
  dateSectionStyle,
  modalBackdropStyle,
  modalStyle, 
  gridStyle,
  boxStyle,
  cardGridContainerStyle
} from './styles'

const CardGrid = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<AppointmentType| null>(null);
  const { appointmentsList, fetchAppointments } = useAppointmentContext();
  let groupedAppointments: Record<string, AppointmentType[]> = groupAppointmentsByDate(appointmentsList); 

  useEffect(() => {
    groupedAppointments = groupAppointmentsByDate(appointmentsList);
  }, [appointmentsList])

  const handleOpen = (appointment: AppointmentType) => {
      setSelectedCard(appointment);
      setOpen(true);
  };

  const handleClick = async () => {
    try {
      await api.put(`/appointments/${selectedCard?.appointment_id}`)
      fetchAppointments();
      handleClose();
    }catch (e) {
      throw e
    }
  }

  const handleClose = () => {
      setOpen(false);
      setSelectedCard(null);
  };

  return (
    <div style={cardGridContainerStyle}>
      <Typography sx={{ borderBottom: '1px solid white' }} padding={4} variant="h6" component="h2" fontWeight="bold">
        Scheduled Appointments
      </Typography>
      <div style={gridStyle}>
        {Object.keys(groupedAppointments)
          .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
          .map(date => (
            <div key={date} style={dateSectionStyle}>
              <Typography variant="h6" sx={{ textAlign: 'left', marginBottom: '16px', fontWeight: 'bold' }}>
                {format(parseISO(date), 'd/MM/yyyy')}
              </Typography>
              <div style={appointmentsContainerStyle}>
                {groupedAppointments[date].map(appointment => (
                  <Card key={appointment.appointment_id} onClick={handleOpen} appointment={appointment} />
                ))}
              </div>
            </div>
          ))}
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description" sx={modalBackdropStyle}>
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2" fontWeight="bold" style={{ textAlign: 'center' }}>
            Appointment Details
          </Typography>
          <Box sx={{ border: '1px solid black', borderRadius: '10px', padding: '10px', margin: '10px' }}>
            <Box sx={boxStyle}>
              <CalendarMonthIcon fontSize="small" style={{ marginRight: '20px' }} />
              <Typography fontWeight="bold">{selectedCard ? format(parseISO(selectedCard.appointment_date), 'd/MM/yyyy') : ''}</Typography>
            </Box>
            <Box sx={boxStyle}>
              <QueryBuilderIcon fontSize="small" style={{ marginRight: '20px' }} />
              <Typography fontWeight="bold">{selectedCard?.time.time}</Typography>
            </Box>
            <Box sx={boxStyle}>
              <MedicationIcon fontSize="small" style={{ marginRight: '20px' }} />
              <Typography fontWeight="bold">{selectedCard?.exam_name}</Typography>
            </Box>
            <Box sx={boxStyle}>
              <LocationOnIcon fontSize="small" style={{ marginRight: '20px' }} />
              <Typography fontWeight="bold">Hospital Israelita Albert Einstein</Typography>
            </Box>
          </Box>
          <Typography sx={{ textAlign: 'center', mt: 2 }} id="modal-description">
            <Button onClick={handleClick} sx={{ color: 'white', backgroundColor: 'rgb(231, 50, 50)' }}>
              Cancel Appointment
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CardGrid;