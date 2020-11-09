import React from "react";
import "../stylesheets/_SheepCounter.scss";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acc: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      prevState = prevState.acc + 1;
      return {
        acc: prevState,
      };
    });
  }

  render() {
    return (
      <>
        <p className="counter">{this.state.acc}</p>
        <button type="button" className="button" onClick={this.handleClick}>
          Contador de ovejas
        </button>
      </>
    );
  }
}

export default SheepCounter;
