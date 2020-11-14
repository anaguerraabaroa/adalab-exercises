import React from "react";

const MIMIMITranslator = (props) => {
  // console props to verify that information that is being sent from App through TextInput is reaching MIMIMITranslator
  // console.log(props.value);

  return <p className="text">{props.value.replace(/[aeiou]/gi, "i")}</p>;
};

export default MIMIMITranslator;
