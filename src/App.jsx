import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert.jsx';


function App() {

  const [mode,setMode]=useState('light');

  const togglemode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
   <>
    <Navbar title="Text.Utils" mode={mode} togglemode={togglemode}/>
    <Alert/>
    <div className="container">
      <TextForm heading="enter your text here :"/>
    </div>
   </>
  );
}

export default App;
