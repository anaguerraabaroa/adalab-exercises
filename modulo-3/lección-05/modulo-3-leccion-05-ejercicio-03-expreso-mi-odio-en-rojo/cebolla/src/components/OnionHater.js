import React from "react";
import "../stylesheets/_onionHater.scss";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleonChange = this.handleonChange.bind(this);
  }

  handleonChange(event) {
    this.forceUpdate();
    const formElement = document.querySelector(".form");
    const keyWord = event.target.value;
    const keyWordToLowerCase = keyWord.toLowerCase();
    if (keyWordToLowerCase.includes("onion")) {
      formElement.classList.add("form__color");
      this.isHating = true;
    } else {
      formElement.classList.remove("form__color");
      this.isHating = false;
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
