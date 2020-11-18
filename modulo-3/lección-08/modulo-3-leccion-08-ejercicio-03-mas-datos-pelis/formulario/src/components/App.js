import React, { useState } from "react";
import Form from "./Form";
import "../stylesheets/App.scss";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [age, setAge] = useState("");
  const [genres, setGenres] = useState("");

  const handleInput = (id, value, name) => {
    //console.log("App: me han cambiado", id, value);
    if (id === "title") {
      setTitle(value);
    } else if (id === "description") {
      setDescription(value);
    } else if (id === "select") {
      setLanguage(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "genres") {
      setGenres(value);
    }
  };

  return (
    <div className="page">
      <Form
        handleInput={handleInput}
        title={title}
        description={description}
        language={language}
        age={age}
        genres={genres}
      />
    </div>
  );
};

export default App;
