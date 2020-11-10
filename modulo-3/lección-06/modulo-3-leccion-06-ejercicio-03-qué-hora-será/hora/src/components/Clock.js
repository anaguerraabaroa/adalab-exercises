import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    const date = new Date();
    this.setState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    });
  }

  render() {
    return (
      <p className="clock">
        {this.state.hours} : {this.state.minutes} : {this.state.seconds}
      </p>
    );
  }
}

export default Clock;
