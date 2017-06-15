import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <a href="/">Home</a>
        <a href="/var/que pedro">Otra ruta</a>

        <Link to="/">Home</Link>
        <Link to="/var/quepedro">Link a otra ruta</Link>

        <Routes/>

      </div>
    );
  }
}

export default App;
