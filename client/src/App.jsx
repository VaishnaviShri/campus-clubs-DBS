import './App.css';
import React, {Fragment} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Routes } from 'react-router-dom';
import chLanding from './routes/chLanding';
import chNewPost from './routes/chNewPost';
import adminLanding from './routes/adminLanding';
import adminAddClub from './routes/adminAddClub';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/chHome" commponent = {chLanding}/>
          <Route exact path = "/chNew" commponent = {chNewPost}/>
          <Route exact path = "/adminHome" commponent = {adminLanding}/>
          <Route exact path = "/adminAdd" commponent = {adminAddClub}/>
        </Switch>
      </Router>
    </div>
);
}

export default App;
