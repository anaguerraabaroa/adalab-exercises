import React from "react";

const MediaCard = (props) => {
  return (
    <>
      <header className="App-header">
        <img src={props.image} className="App-avatar" alt="Avatar" />
        <div className="App-title">
          <h1 className="App-name">{props.name}</h1>
          <h2 className="App-date">{props.date}</h2>
        </div>
      </header>
      <p className="App-text">{props.text}</p>
      <small className="App-small">
        <p className="App-info">Leer más...</p>
        <div className="App-likes">
          <p className="App-likesNumber">{props.likes}</p>
          <i className="App-icon fas fa-heart"></i>
        </div>
      </small>
    </>
  );
};

export default MediaCard;
