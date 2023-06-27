import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import { set } from 'mongoose';


function App() {
  const [mode, setMode] = useState('light'); //wether darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      mssg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'currentcolor';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextHelp-Dark mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextHelp-Light mode';
    }
  }

  return (
    <>
      
        <Navbar title="TextHelp" about="About" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container">
         
           <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
