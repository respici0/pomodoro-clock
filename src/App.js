import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div id="header">
            <h1>Pomodoro Clock</h1>
          </div>
          <div className="container-fluid">
            <div className="row" id="pomodoroClock">
              <div className="col">
                <div className="row" id="session-label">
                  <h3> Session Length</h3>
                  <div className="col" id="session-increment">
                    up arrow
                  </div>
                  <div className="col" id="session-length">
                    25
                  </div>
                  <div className="col" id="session-decrement">
                    down arrow
                  </div>
                </div>
                <div className="row" id="break-label">
                  <h3> Break Length</h3>
                  <div className="col" id="break-increment">
                    up arrow
                  </div>
                  <div className="col" id="break-length">
                    5
                  </div>
                  <div className="col" id="break-decrement">
                    down arrow
                  </div>
                </div>
              </div>

              <div className="col-8">counter in here</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
