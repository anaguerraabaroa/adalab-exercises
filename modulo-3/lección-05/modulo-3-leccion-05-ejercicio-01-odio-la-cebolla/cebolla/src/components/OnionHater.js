import React from "react";
import "../stylesheets/_onionHater.scss";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleonChange = this.handleonChange.bind(this);
  }

  /* We use a method to handle an alert when user writes "onion" on the textarea*/
  handleonChange(event) {
    const keyWord = event.target.value;
    if (keyWord.includes("onion")) {
      return alert("I HATE ONIONS!!!");
    }
  }

  render() {
    return (
      <>
        <form class="form">
          <label for="comments" class="comments">
            Comentarios:
          </label>
          {/* We add a listener on the textarea */}
          <textarea
            onChange={this.handleonChange}
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
