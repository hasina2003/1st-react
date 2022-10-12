
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');  //whether dark mode is enable or not
  const [alert,setAlert] = useState(null);  
 


  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
      },1500);
    }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title="TextEdit - Dark mode";
      // setInterval(()=>{
      //   document.title="TextEdit is Amazing Mode";
      //   },500);
      
      //   setInterval(()=>{
      //     document.title="Install TextEdit now";
      //     },200);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title="TextEdit - Light mode";
    }
  }


  return (

  <>

<Router>

<Navbar title="TextEdit" mode={mode} toggleMode={toggleMode} />

<Alert alert={alert} />

<div className="container my-3">
   
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />} />
        
        </Routes>


</div>
</Router>

  </>
  );
}

export default App;
