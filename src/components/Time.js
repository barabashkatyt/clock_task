import React, { Component } from "react";
import DigitalWatch from "./DigitalWatch";

class Time extends Component {
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
      <p>
        <DigitalWatch time={this.state.time} />
      </p>
    );
  }
}

export default Time;
