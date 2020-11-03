import React from "react";
// import React, {Component} from "react" --> Otra forma de escribirlo junto con el comentario de abajo
import avatar from "./avatar.jpg";
import "./App.scss";

class App extends React.Component {
  // class App extends Component { --> Otra forma de escribirlo junto con el comentario de arriba
  render() {
    const header = (
      <header className="App-header">
        <img src={avatar} className="App-avatar" alt="Avatar" />
        <div className="App-title">
          <h1 className="App-name">Ana Guerra</h1>
          <h2 className="App-date">Domingo 1 de noviembre de 2020</h2>
        </div>
      </header>
    );
    const paragraph = (
      <p className="App-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    );
    const small = (
      <small className="App-small">
        <p className="App-info">Leer más...</p>
        <div className="App-likes">
          <p className="App-likesNumber">20</p>
          <i className="App-icon fas fa-heart"></i>
        </div>
      </small>
    );
    const appRoot = (
      <div className="App">
        {header} {paragraph} {small}
      </div>
    );
    return appRoot;
  }
}

export default App;
