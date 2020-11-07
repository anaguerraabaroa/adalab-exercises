import React from "react";
import "../stylesheets/_onionHater.scss";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.formClass = "";
    this.handleonChange = this.handleonChange.bind(this);
  }

  handleonChange(event) {
    const keyWord = event.target.value;
    const keyWordToLowerCase = keyWord.toLowerCase();
    if (keyWordToLowerCase.includes("onion")) {
      this.isHating = true;
      this.formClass = "form__color";
    } else {
      this.isHating = false;
      this.formClass = "";
    }
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <form className={"form " + this.formClass}>
          <label htmlFor="comments" className="comments">
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
