import { useEffect, useState } from 'react';
import { fetchAvailableTimes,fetchExams } from './helpers/functions/Fetch'
import './App.css';
import './global.css'

import Header from './pages/components/Header';
import CenteredFormCard from './pages/components/FormCard/FormCard';
import CardGrid from './pages/components/CardGrid/CardGrid';
import Home from './pages/Home';
import { AppointmentProvider } from './context/ContextProvider';

function App() {
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
    <div className="App">
      <Header />
      <AppointmentProvider>
        <Home>
          <div style={{maxHeight: '800px'}}>
            <CenteredFormCard availableTimes={examsTime} examsList={exams}/>
          </div>
            <CardGrid />
        </Home>
      </AppointmentProvider>
    </div>
  );
}

export default App;
