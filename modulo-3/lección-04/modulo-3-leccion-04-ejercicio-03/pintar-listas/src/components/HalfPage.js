import React from "react";
import ReactDOM from "react-dom";
import "../stylesheets/App.scss";

class HalfPage extends React.Component {
  render() {
    return <div className="horizontal-center">{this.props.children}</div>;
  }
}

ReactDOM.render(
  <HalfPage>
    <h1>Welcome</h1>
    <p>Thank you for visiting our webpage!</p>
    <p>We hope you enjoy our new shiny site!</p>
  </HalfPage>,
  document.getElementById("root")
);

export default HalfPage;
