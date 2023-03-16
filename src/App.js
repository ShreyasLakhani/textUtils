
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () =>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
 
return (
  <>
    <Navbar title="TextUtils" feature="Feature" toggleMode={toggleMode} mode={mode} about="About textUtils" className="nav" />
    <div className="container">
      <Textarea heading="Enter Text" mode={mode}/>
    </div>
  </>
);
}

export default App;
