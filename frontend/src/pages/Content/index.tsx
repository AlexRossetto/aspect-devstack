import React, { useEffect, useState } from 'react';
import Home from '../Home';
import CenteredFormCard from '../components/FormCard/FormCard';
import CardGrid from '../components/CardGrid/CardGrid';
import { fetchExams, fetchAvailableTimes } from '../../helpers/functions/fetch';

const Content = () => {
  const [exams,setExams] = useState([]);
  const [examsTime, setExamsTime] = useState([]);

  const fetchData = async () => {
    fetchExams(setExams);
    fetchAvailableTimes(setExamsTime);
  }

  useEffect(() => { 
    fetchData();
  }, [])

  return (
    <Home>
      <div style={{maxHeight: '800px'}}>
        <CenteredFormCard availableTimes={examsTime} examsList={exams}/>
      </div>
      <CardGrid />
    </Home>
  )
}




export default Content;