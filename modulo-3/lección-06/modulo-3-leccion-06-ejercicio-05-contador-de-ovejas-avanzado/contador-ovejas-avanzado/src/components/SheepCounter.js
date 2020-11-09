import React from "react";
import "../stylesheets/_SheepCounter.scss";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acc: 0,
      image: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, prevStateImg, props) => {
      prevState = prevState.acc + 1;
      prevStateImg =
        "http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png";
      return {
        acc: prevState,
        image: prevStateImg,
      };
    });
  }

  render() {
    return (
      <>
        <p className="counter">{this.state.acc}</p>
        <img className="image" src={this.state.image} alt="" />
        <button type="button" className="button" onClick={this.handleClick}>
          Contador de ovejas
        </button>
      </>
    );
  }
}

export default SheepCounter;
