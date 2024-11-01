import { useContext } from "react";
import { AppointmentContext } from "../../context/ContextProvider";

export const useAppointmentContext = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error(
      "useAppointmentContext must be used within an AppointmentProvider",
    );
  }
  return context;
};
