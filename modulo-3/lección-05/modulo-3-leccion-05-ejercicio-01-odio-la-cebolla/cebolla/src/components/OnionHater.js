import React from "react";
import "../stylesheets/_onionHater.scss";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  /* We use a method to handle an alert when user writes "onion" on the textarea*/
  handleOnChange(event) {
    const keyWord = event.target.value;
    if (keyWord.includes("onions")) {
      return alert("I HATE ONIONS!!!");
    }
  }

  render() {
    return (
      <>
        <form className="form">
          <label htmlFor="comments" className="comments">
            Comentarios:
          </label>
          {/* We add a listener on the textarea */}
          <textarea
            onChange={this.handleOnChange}
            id="comments"
            name="comments"
            rows="8"
            cols="80"
          ></textarea>
        </form>
      </>
    );
  }
}

export default OnionHater;
