import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div id="header">
            <h1>Pomodoro Clock</h1>
          </div>
          <div className="container-fluid" id="pomodoroClock" />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
