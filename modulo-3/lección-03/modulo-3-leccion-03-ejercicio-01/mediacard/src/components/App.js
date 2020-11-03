import React from "react";
import MediaCard from "./MediaCard";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard />
      </div>
    );
  }
}

export default App;
