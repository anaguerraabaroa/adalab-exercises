import React from "react";

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const inputValue = ev.currentTarget.value;
    this.setState({
      value: inputValue,
    });
  }

  render() {
    return (
      <>
        <form className="form">
          <label htmlFor="text" className="text">
            Introduce tu texto aquí:
          </label>
          <input
            id="text"
            type="text"
            name="text"
            onChange={this.handleChange}
          />
        </form>
        <p className="text">{this.state.value}</p>
      </>
    );
  }
}

export default InputText;
