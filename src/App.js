import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Clock from "./components/Clock";
import { Navbar } from "./components/Navbar";
// import Time from "./components/Time";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.ticktock(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  ticktock() {
    this.setState({
      time: new Date().toLocaleString(),
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
              component={() => <Clock time={this.state.time} />}
            />
            <Route
              path="/two"
              component={() => <Clock time={this.state.time} />}
            />
            {/* <Route path="/" component={Time} /> */}
            <Route
              path="/"
              component={() => <Clock time={this.state.time} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
