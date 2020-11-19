import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    const text = localStorage.getItem("value");
    if (text !== null) {
      this.setState({ value: text });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("value", this.state.value);
  }

  handleInput(ev) {
    const inputValue = ev.currentTarget.value;
    this.setState({ value: inputValue });
  }
  render() {
    return (
      <>
        <form action="">
          <label htmlFor="text">Escribe aquí tu texto:</label>
          <input id="text" type="text" onChange={this.handleInput} />
        </form>
        <p>{this.state.value}</p>
      </>
    );
  }
}

export default App;
