import React, { useState } from "react";
import Form from "./Form";
import "../stylesheets/App.scss";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [language, setlanguage] = useState("");

  const handleInput = (id, value) => {
    //console.log("App: me han cambiado", id, value);
    if (id === "title") {
      setTitle(value);
    } else if (id === "description") {
      setdescription(value);
    } else if (id === "select") {
      setlanguage(value);
    }
  };

  return (
    <div className="page">
      <Form
        handleInput={handleInput}
        title={title}
        description={description}
        language={language}
      />
    </div>
  );
};

export default App;
