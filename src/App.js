import './App.css';
import Navbar from './components/Navbar';
import Form from './components/From';
import About from './components/About';


function App() {
  return (
    <div>
      <Navbar title = "TextUtils"/>   
      <div className="container">
        <Form heading = "Text"/>
      </div>
      <div className='container'>
        <About/>
      </div>
    </div>
      
    
  );
}

export default App;
