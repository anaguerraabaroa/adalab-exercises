import React from "react";
import CityImage from "./CityImage";
import "../stylesheets/_Destiny.scss";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.cityName = "";
    this.city = "";
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  /* We handle an alert when user choose a destination option*/
  handleOnChange(event) {
    const selectedCity = event.target.value;
    this.cityName = selectedCity;
    this.city = selectedCity;
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <form className="form">
          <label htmlFor="select" className="label">
            Select your next destination:
          </label>
          {/* We add a listener on the select element */}
          <select
            className="select"
            id="select"
            name="select"
            onChange={this.handleOnChange}
          >
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
        <CityImage cityName={this.cityName} cityImage={this.city}></CityImage>
      </>
    );
  }
}

export default Destiny;
