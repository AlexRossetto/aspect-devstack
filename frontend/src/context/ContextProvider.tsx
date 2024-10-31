import React, { createContext, useState, ReactNode, useEffect } from 'react'
import { Appointment, AppointmentContextType } from './types'
import api from '../services/api';

export const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [appointmentsList, setAppointmentsList] = useState<Appointment[]>([]);

    const fetchAppointments = async () => {
      const appointments = await api.get('/appointments')
      setAppointmentsList(appointments.data.data)
    }
    

    useEffect(() => {
        fetchAppointments();
    }, []); 

    return (
        <AppointmentContext.Provider value={{ appointmentsList, fetchAppointments }}>
            {children}
        </AppointmentContext.Provider>
    );
};