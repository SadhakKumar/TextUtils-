import './App.css';
import Navbar from './components/Navbar';
import Form from './components/From';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {

  const [darkMode,setdarkMode] = useState('light');
  const [modeName,setmodeName] = useState('Enable DarkMode');
  const [textStyle,setTextStyle] = useState({
    color: 'black'
  })
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() =>{
      setAlert(null);
    },1500)
  }

  const toggleDark =() =>{
    if(darkMode === 'light'){
      setdarkMode('dark');
      setmodeName('Enable LightMode');
      setTextStyle({
        color: 'white'
      })
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode Enable","success");
    }
    else{
      setdarkMode('light');
      setmodeName('Enable DarkMode');
      setTextStyle({
        color: 'black'
      })
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enable","success");
    }
  }

  return (
    <div>
      <Navbar title = "TextUtils" mode ={darkMode} togglemode = {toggleDark} modeName = {modeName} textStyle = {textStyle}/>   
      <Alert Alert = {alert}/>
      <div className="container">
        <Form heading = "Text" textStyle = {textStyle} mode ={darkMode}/>
      </div>
      <div className='container'>
        <About textStyle = {textStyle} mode ={darkMode}/>
      </div>
    </div>
      
    
  );
}

export default App;
