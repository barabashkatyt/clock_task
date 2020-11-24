import React, { Component } from "react";
import AnalogClock from "analog-clock-react";

class DigitalWatch extends Component {
  render() {
    const { time, minutes } = this.props;
    let options = {
      useCustomTime: true,
      width: "300px",
      border: true,
      borderColor: "#2e2e2e",
      baseColor: "#17a2b8",
      centerColor: "#459cff",
      centerBorderColor: "#fff",
      handColors: {
        second: "#d81c7a",
        minute: "#fff",
        hour: "#fff",
      },
      seconds: time.seconds,
      minutes: minutes,
      hours: time.hours,
    };
    return (
      <>
        <p>
          The time is {time.hours}:{minutes}:{time.seconds}.
        </p>
        <AnalogClock {...options} />
      </>
    );
  }
}

export default DigitalWatch;
