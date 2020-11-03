import React from "react";
import MediaCard from "./MediaCard";
import avatar from "../images/avatar.jpg";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <MediaCard
          name="Ana Guerra"
          image={avatar}
          date="Domingo 1 de noviembre de 2020"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
          likes="20"
        />
      </div>
    );
  }
}

export default App;
