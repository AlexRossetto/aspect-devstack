import { parseISO, format } from "date-fns";
import { AppointmentType } from "../types";

export function groupAppointmentsByDate(appointments: AppointmentType[]) {
  const grouped: Record<string, AppointmentType[]> = {};

  appointments.forEach(appointment => {
    const dateKey = format(parseISO(appointment.appointment_date), 'yyyy-MM-dd');
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(appointment);
  });

  Object.keys(grouped).forEach(date => {
    grouped[date].sort((a, b) => {
      const timeA = parseISO(`${a.appointment_date}T${a.time.time}`);
      const timeB = parseISO(`${b.appointment_date}T${b.time.time}`);
      return timeA.getTime() - timeB.getTime();
    });
  });

  return grouped;
}
