import React from "react";
import "../stylesheets/_onionHater.scss";

class OnionHater extends React.Component {
  onChangeListener(event) {
    const keyWord = event.target.value;
    if (keyWord.includes("cebolla")) {
      return alert("ODIO LA CEBOLLA!!!");
    }
  }

  render() {
    return (
      <>
        <form class="form">
          <label for="comments" class="comments">
            Comentarios:
          </label>
          <textarea
            onChange={this.onChangeListener}
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
