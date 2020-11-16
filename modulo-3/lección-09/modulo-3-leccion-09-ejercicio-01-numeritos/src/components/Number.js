import React from "react";

class Number extends React.Component {
  render() {
    return (
      <>
        <li className="title">{this.props.number}</li>
      </>
    );
  }
}

export default Number;
