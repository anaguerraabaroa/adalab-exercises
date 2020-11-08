import React from "react";
import CityImage from "./CityImage";
import CitySelector from "./CitySelector";
import "../stylesheets/_Destiny.scss";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.cityName = "";
    this.city = "";
    this.handleSelectedCity = this.handleSelectedCity.bind(this);
  }

  handleSelectedCity = (selectedCity) => {
    this.cityName = selectedCity;
    this.city = selectedCity;
    this.forceUpdate();
  };

  render() {
    return (
      <>
        <CitySelector handleCity={this.handleSelectedCity}></CitySelector>
        <CityImage cityName={this.cityName} cityImage={this.city}></CityImage>
      </>
    );
  }
}

export default Destiny;
