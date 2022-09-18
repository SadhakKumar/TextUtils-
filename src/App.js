import './App.css';
import Navbar from './components/Navbar';
import Form from './components/From';
import About from './components/About';
import React, {useState} from 'react'

function App() {

  const [darkMode,setdarkMode] = useState('light');
  const [modeName,setmodeName] = useState('Enable DarkMode');
  const [textStyle,setTextStyle] = useState({
    color: 'black'
  })
  const toggleDark =() =>{
    if(darkMode === 'light'){
      setdarkMode('dark');
      setmodeName('Enable LightMode');
      setTextStyle({
        color: 'white'
      })
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setdarkMode('light');
      setmodeName('Enable DarkMode');
      setTextStyle({
        color: 'black'
      })
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <div>
      <Navbar title = "TextUtils" mode ={darkMode} togglemode = {toggleDark} modeName = {modeName} textStyle = {textStyle}/>   
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
