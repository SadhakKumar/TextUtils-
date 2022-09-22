import './App.css';
import Navbar from './components/Navbar';
import Form from './components/From';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 

function App() {

  const [darkMode,setdarkMode] = useState('light');
  const [modeName,setmodeName] = useState('Enable DarkMode');
  const [textStyle,setTextStyle] = useState({
    color: 'black'
  })
  const [alert, setAlert] = useState(null);

  const [blackMode,setBlackMode] = useState('set button to dark');
  const [buttonColor,setButtonColor] = useState('primary');

  const onClickBlack = () =>{
    if(buttonColor === 'primary'){
      setButtonColor('dark');
      setBlackMode('set button color to blue');
    }
    else{
      setButtonColor('primary');
      setBlackMode('set button color to dark');
    }
    
  }

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
      <Router>

      
        <Navbar title = "TextUtils" mode ={darkMode} togglemode = {toggleDark} modeName = {modeName} textStyle = {textStyle} onClickBlack = {onClickBlack} blackMode = {blackMode}/>   
        <Alert Alert = {alert}/>

        <div className="container">
          <Routes>
            <Route exact path="/about" element = {<About textStyle = {textStyle} mode ={darkMode}/>}/>
              
            <Route exact path="/" element = {<Form heading = "Text" textStyle = {textStyle} mode ={darkMode} buttonColor = {buttonColor}/>}/>
              
          </Routes>
        </div>
      </Router>
      
        
      
    </div>
      
    
  );
}

export default App;
