import React from "react";
import Clock from "./Clock";
import SheepCounter from "./SheepCounter";
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <div className="timeToSleep">
        <Clock />
        <SheepCounter />
      </div>
    </>
  );
}

export default App;
