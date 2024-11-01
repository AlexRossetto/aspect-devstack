import { SetStateAction } from "react";
import api from "../../services/api";



export const fetchExams = async (setExams: SetStateAction<any>) => {
  const exams = await api.get("/exams");
  setExams(exams.data.data);
};

export const fetchAvailableTimes = async (
  setExamsTime: SetStateAction<any>,
) => {
  const examsTime = await api.get("/availabletimes");
  setExamsTime(examsTime.data.data.data);
};
