export interface CenteredFormCardProps {
  availableTimes: AvailableTime[]
  examsList: Exam[];
}

export interface FilteredAvailableTimesType {
  exam: Exam

}

export interface FormDataType {
  selectedExam: string | number,
  selectedDate: string,
  selectedTime: string | number | null,
  comment: string,
}

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

export interface Exam {
  exam_id: number;
  exam_name: string;
}

export interface AvailableTime {
  time_id: number;
  time: string;
  exam: Exam;
}