import React from "react";

class MediaCard extends React.Component {
  render() {
    return (
      <>
        <header className="App-header">
          <img src={this.props.image} className="App-avatar" alt="Avatar" />
          <div className="App-title">
            <h1 className="App-name">{this.props.name}</h1>
            <h2 className="App-date">{this.props.date}</h2>
          </div>
        </header>
        <p className="App-text">{this.props.text}</p>
        <small className="App-small">
          <p className="App-info">Leer más...</p>
          <div className="App-likes">
            <p className="App-likesNumber">{this.props.likes}</p>
            <i className="App-icon fas fa-heart"></i>
          </div>
        </small>
      </>
    );
  }
}

export default MediaCard;
