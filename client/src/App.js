import React, {Fragment} from "react";
import './App.css';

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Fragment>
      <div className="container">
      <Register/>
      </div>
    </Fragment>
  );
}

export default App;
