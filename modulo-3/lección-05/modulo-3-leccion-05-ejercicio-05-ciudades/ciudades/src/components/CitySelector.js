import React from "react";

class CitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const selectedCity = ev.target.value;
    this.props.handleCity(selectedCity);
  }

  render() {
    return (
      <>
        <form className="form">
          <label htmlFor="select" className="label">
            Select your next destination:
          </label>
          <select
            className="select"
            id="select"
            name="select"
            onChange={this.handleChange}
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
      </>
    );
  }
}

export default CitySelector;
