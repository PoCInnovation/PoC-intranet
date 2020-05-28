import React from 'react';
import logo from './logo.svg';
import './App.css';
import homePage from "./components/home_app";
import {Route, NavLink, HashRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HashRouter>
          <div>
            <li><NavLink to="/home">Home</NavLink></li>
          </div>
          <div>
            <Route path="/home" component={homePage}/>
          </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
