import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DigitalWatch from "./components/DigitalWatch";
import { Navbar } from "./components/Navbar";
// import Time from "./components/Time";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.ticktock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  ticktock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // let timeNow = `${hours}:${minutes}:${seconds}`;
    let timeObj = {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    this.setState({
      time: timeObj,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route
              path="/one"
              component={() => (
                <DigitalWatch
                  time={this.state.time}
                  minutes={this.state.time.minutes + 1}
                />
              )}
            />
            <Route
              path="/two"
              component={() => (
                <DigitalWatch
                  time={this.state.time}
                  minutes={this.state.time.minutes + 2}
                />
              )}
            />{" "}
            {/* <Route path="/" component={Time} /> */}
            <Route
              path="/"
              component={() => (
                <DigitalWatch
                  time={this.state.time}
                  minutes={this.state.time.minutes}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
