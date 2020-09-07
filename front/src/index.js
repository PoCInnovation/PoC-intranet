import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AuthBlock from "./components/Auth/auth_block";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './components/pages/home';
import ProjectPage from './components/pages/projet';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path={"/"}>
                <AuthBlock/>
            </Route>
            <Route exact path={"/profil"}>
                <HomeContainer />
            </Route>
            <Route path="/profil/projet">
                <ProjectPage />
            </Route>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
