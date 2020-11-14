import React, { useState } from "react";
import TextInput from "./TextInput";
import "../stylesheets/App.scss";

const App = () => {
  const [text, setText] = useState("");

  const handleInput = (value) => {
    // console.log("App: me han cambiado", value);
    setText(value);
  };

  return (
    <div className="page">
      <TextInput handleInput={handleInput} value={text} />
    </div>
  );
};

export default App;
