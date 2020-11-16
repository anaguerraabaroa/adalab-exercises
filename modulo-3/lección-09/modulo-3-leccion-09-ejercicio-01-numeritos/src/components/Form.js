import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form className="form" action="">
        <label htmlFor="input" className="input">
          Introduce aquí un número:
        </label>
        <input id="input" type="number" className="number" />
      </form>
    );
  }
}

export default Form;
