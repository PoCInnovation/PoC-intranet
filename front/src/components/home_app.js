import React from "react";
import './home_app.css';
import logo from '../logoPoC_white.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function HomePage() {
    return(
      <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="App-Welcome">Bienvenue, User !</div>
              <div className="Rectangle-text">
              <div className="App-ProjectName">Project Name </div>
              <div className="App-Rectangle-Task">Task</div>
              </div>
            </header>
      </div>
    )
}

export default function App() {
    return (
        <Router>
          <Switch>
            <Route path="/" component={ HomePage } />
            <Route path="/home" component= { HomePage } />
          </Switch>
        </Router>
      );
}