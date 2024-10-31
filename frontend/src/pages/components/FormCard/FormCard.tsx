import { FormEvent, useEffect, useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box, MenuItem, ButtonBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import api from '../../../services/api';
import { getTomorrowsDate } from '../../../helpers/functions/Date';
import { useAppointmentContext } from '../../../helpers/functions/useAppointmentContext';
import { Appointment,AvailableTime, CenteredFormCardProps, Exam, FormDataType } from './types';
import { cardSelect, gridStyleTime } from './styles'

const useStyles = makeStyles({
  card: {
    height: 'auto',
    overflowY: 'auto',
    marginBottom: '20px',
    minWidth: '400px'
  },
});

const CenteredFormCard = ({ availableTimes, examsList }: CenteredFormCardProps) => {
  const [status, setStatus] = useState<'Idle' | 'Loading' | 'Loaded' | 'NoAvailability'>('Idle');
  const [formData, setFormData] = useState<FormDataType>({
    selectedExam: '',
    selectedDate: '',
    selectedTime: null,
    comment: ''
  });
  const classes = useStyles();
  const [availableTimesDate, setAvailableTimesdate] = useState<AvailableTime[]>([]);
  const { fetchAppointments, appointmentsList } = useAppointmentContext();

  const tomorrow = getTomorrowsDate();

  useEffect(() => {
    async function checkAvailability(
      date: string,
      examId: number,
      appointments: Appointment[],
      availableTimes: AvailableTime[]
    ) {
      setStatus('Loading'); 
      const bookedTimeIds = appointments
        .filter(
          (appointment) =>
            appointment.appointment_date === date &&
            appointment.exam_name === availableTimes.find((at) => at.exam.exam_id === examId)?.exam.exam_name
        )
        .map((appointment) => appointment.time.time_id);

      const filteredAvailableTimes = availableTimes.filter(
        (availableTime) =>
          availableTime.exam.exam_id === examId &&
          !bookedTimeIds.includes(availableTime.time_id)
      );

      console.log(filteredAvailableTimes, 'filtered')

      setAvailableTimesdate(filteredAvailableTimes);

      if (filteredAvailableTimes.length > 0) {
        setStatus('Loaded');
      } else {
        setStatus('NoAvailability');
      }
    }

    if (formData.selectedDate && formData.selectedExam) {
      checkAvailability(formData.selectedDate, Number(formData.selectedExam), appointmentsList, availableTimes);
    } else {
      setStatus('Idle');
    }
  }, [formData.selectedDate, formData.selectedExam]);

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formSubmitData = {
      time_id: formData.selectedTime,
      user_id: 1,
      appointment_date: formData.selectedDate,
      comment: formData.comment ? formData.comment : null,
      exam_id: formData.selectedExam
    }

    try {
      await api.post('/appointments', formSubmitData).then(() =>{
        setFormData({
          selectedExam: '',
          selectedDate: '',
          selectedTime: null,
          comment: ''
        });
        setAvailableTimesdate([]);
        fetchAppointments();
      })
    } catch (error) {
      throw error
    }

  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box mb={2}>
          <Typography variant="h5" align="center" gutterBottom>
            Schedule an Exam
          </Typography>
        </Box>
        <form noValidate autoComplete="off" onSubmit={formSubmit}>
          <TextField
            label="Exam"
            select
            fullWidth
            margin="normal"
            variant="outlined"
            value={formData.selectedExam}
            onChange={(e) => setFormData(prev => ({...prev, selectedExam: e.target.value}))}
          >
            {examsList.map((exam : Exam) => (
              <MenuItem key={exam.exam_id} value={exam.exam_id}>
                {exam.exam_name}
              </MenuItem>
            ))}
          </TextField>
          {formData.selectedExam && (
            <TextField
              type="date"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => setFormData(prev => ({...prev, selectedDate: e.target.value}))}
              InputProps={{ inputProps: { min: tomorrow } }}
            />
          )}
          {status === 'Loaded' && availableTimesDate.length > 0 && (
            <div style={gridStyleTime}>
              {availableTimesDate.map((availableTime: AvailableTime) => (
                <Card
                  key={availableTime.time_id}
                  style={{ ...(formData.selectedTime === availableTime.time_id && cardSelect) }}
                >
                  <ButtonBase
                    onClick={() => setFormData(prev => ({ ...prev, selectedTime: availableTime.time_id }))}
                  >
                    <CardContent>
                      <Typography variant="h6" align="center" gutterBottom>
                        {availableTime.time}
                      </Typography>
                    </CardContent>
                  </ButtonBase>
                </Card>
              ))}
            </div>
          )}
          {status === 'NoAvailability' && (
            <Typography variant="subtitle1" align="center" color="error" gutterBottom>
              No available time for the selected date.
            </Typography>
          )}
          <TextField
            label="Comments"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => setFormData(prev => ({...prev, comment: e.target.value}))}
          />
          <Box mt={3} display="flex" justifyContent="center">
            <Button disabled={!formData.selectedExam || !formData.selectedDate || !formData.selectedTime || status === 'Loading'} type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default CenteredFormCard;
