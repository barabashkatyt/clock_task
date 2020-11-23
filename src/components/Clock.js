import React, { Component } from "react";

class Clock extends Component {
  render() {
    const { time } = this.props;
    return <p>The time is {time}.</p>;
  }
}

export default Clock;
