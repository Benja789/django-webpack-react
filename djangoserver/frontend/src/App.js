import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Contador from './Components/Contador';

function App() {
  return (
    <div className="App">
      <title>Titulo de react</title>
      <header className="App-header">
        <img src={"/static/dist/" + logo} className="App-logo" alt="logo" />
        <h1>Esta pagina esta hecha mediante react y siendo renderizada por medio de un servidor de Django</h1>
        <Contador/>
      </header>
    </div>
  );
}

export default App;
