import { useState } from 'react';
import Card from '../AppointmenntCard/AppointmentCard';
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


const groupedAppointments = groupAppointmentsByDate(appointmentsList);

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
      <Typography padding={4} variant="h6" component="h2" fontWeight="bold">
        Scheduled Appointments
      </Typography>
      <div style={gridStyle}>
        {Object.keys(groupedAppointments).map(date => (
          <div key={date} style={dateSectionStyle}>
            <Typography variant="h6" style={{ textAlign: 'left', marginBottom: '16px', fontWeight: 'bold' }}>
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
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description" style={modalBackdropStyle}>
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2" fontWeight="bold" style={{ textAlign: 'center' }}>
            Appointment Details
          </Typography>
          <Box style={{ border: '1px solid black', borderRadius: '10px', padding: '10px', margin: '10px' }}>
            <Box style={boxStyle}>
              <CalendarMonthIcon fontSize="small" style={{ marginRight: '20px' }} />
              <Typography fontWeight="bold">{selectedCard ? format(parseISO(selectedCard.appointment_date), 'd/MM/yyyy') : ''}</Typography>
            </Box>
            <Box style={boxStyle}>
              <QueryBuilderIcon fontSize="small" style={{ marginRight: '20px' }} />
              <Typography fontWeight="bold">{selectedCard?.time.time}</Typography>
            </Box>
            <Box style={boxStyle}>
              <MedicationIcon fontSize="small" style={{ marginRight: '20px' }} />
              <Typography fontWeight="bold">{selectedCard?.exam_name}</Typography>
            </Box>
            <Box style={boxStyle}>
              <LocationOnIcon fontSize="small" style={{ marginRight: '20px' }} />
              <Typography fontWeight="bold">Hospital Israelita Albert Einstein</Typography>
            </Box>
          </Box>
          <Typography style={{ textAlign: 'center' }} id="modal-description" sx={{ mt: 2 }}>
            <Button onClick={handleClick} style={{ color: 'white', backgroundColor: 'rgb(231, 50, 50)' }}>
              Cancel Appointment
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CardGrid;