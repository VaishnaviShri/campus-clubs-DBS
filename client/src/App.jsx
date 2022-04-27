import './App.css';
import React, {Fragment} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Routes } from 'react-router-dom';

import chLanding from './routes/chLanding';
import chNewPost from './routes/chNewPost';
import adminLanding from './routes/adminLanding';
import adminAddClub from './routes/adminAddClub';
import Login from './components/Login';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path = "/chLanding" commponent = {chLanding}/>
          <Route exact path = "/Login" commponent = {Login}/>
          <Route exact path = "/chNewPost" commponent = {chNewPost}/>
          <Route exact path = "/adminLanding" commponent = {adminLanding}/>
          <Route exact path = "/adminAddClub" commponent = {adminAddClub}/>
        </Routes>
      </Router>
    </div>
);
}

export default App;
