import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import About from './components/About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <div className="App">
      {/* <Greet></Greet>
        <Welcome />
        <Hello />

        <Greet name="Vijender1">
          <p>I am inside child</p>
        </Greet>
        <Greet name="Vijender3" /> */}
      {/* <Greet name="Vijender" heroName="Shaktimaan"/> */}
      {/* <Message /> */}
      {/* <FunctionClick /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className='container my-3'>
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<EventBind />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
