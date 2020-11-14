import React, { useState } from "react";
import Form from "./Form";
import "../stylesheets/App.scss";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  const handleInput = (id, value) => {
    //console.log("App: me han cambiado", id, value);
    if (id === "title") {
      setTitle(value);
    } else if (id === "description") {
      setdescription(value);
    }
  };

  return (
    <div className="page">
      <Form handleInput={handleInput} title={title} description={description} />
    </div>
  );
};

export default App;
