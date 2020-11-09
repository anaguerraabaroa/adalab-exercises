import React from "react";
import "../stylesheets/_Square.scss";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: "blue",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.styling === "blue") {
        nextStyling = "square-red";
      } else {
        nextStyling = "blue";
      }
      return {
        styling: nextStyling,
      };
    });
  }

  render() {
    return (
      <div
        className={`square ${this.state.styling}`}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Square;
