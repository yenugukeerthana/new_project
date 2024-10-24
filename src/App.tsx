import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [onButtonClick, setOnButtonClick]=useState<Boolean>(false)
  const onButtonClickEvent=()=>{
    setOnButtonClick(true)
  }
  return (
    <div className="App">
      <header className="App-header">

        <button className='button' onClick={onButtonClickEvent}>
          Click Me
        </button>
        {onButtonClick && <h1>You clicked me</h1>}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
