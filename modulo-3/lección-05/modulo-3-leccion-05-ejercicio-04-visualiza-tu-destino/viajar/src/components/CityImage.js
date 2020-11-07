import React from "react";
import "../stylesheets/_CityImage.scss";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cities = {
      "Buenos Aires":
        "https://pix10.agoda.net/hotelImages/4877634/0/db7ebdd6192005597fb67a0632c3a153.jpg",
      Sidney:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sydney_skyline_at_dusk_-_Dec_2008.jpg/600px-Sydney_skyline_at_dusk_-_Dec_2008.jpg",
      Praga:
        "https://viajesexplorer.es/wp-content/uploads/2019/02/imagen_9020675_20181213175310.jpg",
      Boston:
        "https://www.viajablog.com/wp-content/uploads/2019/04/boston-3690818_1280.jpg",
      Tokio: "https://azturismo.mx/wp-content/uploads/2018/10/Tokio.jpg",
    };
  }

  render() {
    return (
      <>
        <p className="title">{`Your next destination is: ${this.props.cityImage}`}</p>
        <img
          className="cityImage"
          src={this.cities[this.props.cityImage]}
          title={`Imagen de ${this.props.cityName}`}
          alt={this.props.cityName}
        ></img>
      </>
    );
  }
}

export default CityImage;
