import './App.css';
import './global.css'

import Header from './pages/components/Header';
import { AppointmentProvider } from './context/ContextProvider';
import Content from './pages/Content';

function App() {
  
  return (
    <div className="App">
      <Header />
      <AppointmentProvider>
        <Content />
      </AppointmentProvider>
    </div>
  );
}

export default App;
