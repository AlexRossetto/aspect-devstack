export interface Appointment {
  appointment_id: number;
  user_id: number;
  time: {
    time_id: number;
    time: string;
  };
  appointment_date: string;
  comments: string | null;
  exam_name: string;
}

export interface AppointmentContextType {
  appointmentsList: Appointment[];
  fetchAppointments: () => void;
}
