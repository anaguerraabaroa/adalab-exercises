import React from "react";
import "../stylesheets/_Clock.scss";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getHours: "",
      getMinutes: "",
      getSeconds: "",
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    const date = new Date();
    this.setState({
      getHours: date.getHours(),
      getMinutes: date.getMinutes(),
      getSeconds: date.getSeconds(),
    });
  }

  render() {
    return (
      <p className="clock">
        {this.state.getHours} : {this.state.getMinutes} :{this.state.getSeconds}
      </p>
    );
  }
}

export default Clock;
