import React from "react";
import "../stylesheets/_Destiny.scss";

class Destiny extends React.Component {
  /* We handle an alert when user choose a destination option*/
  onChangeListener(event) {
    const selectedCity = event.target.value;
    return alert(`Your next destination is ${selectedCity}!`);
  }

  render() {
    return (
      <>
        <form class="form">
          <label for="select">Select your next destination:</label>
          {/* We add a listener on the select element */}
          <select id="select" name="select" onChange={this.onChangeListener}>
            <option value="Your destination" disabled selected>
              Your destination
            </option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sidney">Sidney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>
        </form>
      </>
    );
  }
}

export default Destiny;
