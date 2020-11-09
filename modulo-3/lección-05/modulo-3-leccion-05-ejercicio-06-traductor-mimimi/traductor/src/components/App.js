import React from "react";
import TextInput from "./TextInput";
import "../stylesheets/App.scss";

function App() {
  const handleInboxClick = (value) => {
    console.log("Me han escrito", value);
  };

  return (
    <div className="App">
      <TextInput handleClick={handleInboxClick}></TextInput>
    </div>
  );
}

export default App;
