export interface AppointmentCardProps {
  onClick: (appointment: AppointmentType) => void;
  appointment: AppointmentType
}

export interface AppointmentType {
  appointment_date: string
  appointment_id: number
  comments?: string | null
  exam_name: string
  time: {
    time_id: number
    time: string
  }
  user_id: number
}
