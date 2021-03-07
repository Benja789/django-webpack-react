import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Titulo de react</title>
      <header className="App-header">
        <img src={"/static/dist/" + logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > Learn React </a>
        <h1>Página actualizada</h1>
        <p>Esta pagina esta hecha mediante react y siendo renderizada por medio de un servidor de Django</p>
      </header>
    </div>
  );
}

export default App;
