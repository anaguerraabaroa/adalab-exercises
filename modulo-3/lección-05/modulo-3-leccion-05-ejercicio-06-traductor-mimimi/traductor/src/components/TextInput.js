import React from "react";
import MIMIMITranslator from "./MIMIMITranslator";

const TextInput = (props) => {
  // console props to verify that information from App function is reaching TextInput
  // console.log(props.handleInput);
  const handleChange = (ev) => {
    // console.log("Me han cambiado", ev.target.value);
    const inputValue = ev.target.value;
    //console.log(inputValue);
    props.handleInput(inputValue);
  };
  return (
    <>
      <label htmlFor="input" className="label">
        Incluye aquí tu texto:
      </label>
      <input
        id="input"
        type="text"
        className="input"
        placeholder="Texto"
        onChange={handleChange}
      />
      <MIMIMITranslator value={props.value} />
    </>
  );
};

export default TextInput;
