import React from "react";
import MIMIMITranslator from "./MIMIMITranslator";
import "../stylesheets/_TextInput.scss";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const textArea = ev.target.value;
    this.text = textArea;
    this.props.handleClick(textArea);
  }

  render() {
    return (
      <>
        <form className="form">
          <label htmlFor="comments" className="comments">
            Comentarios:
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="8"
            cols="80"
            onChange={this.handleChange}
          ></textarea>
          <MIMIMITranslator textValue={this.text}></MIMIMITranslator>
        </form>
      </>
    );
  }
}

export default TextInput;
