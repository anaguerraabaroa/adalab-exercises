import React from "react";

class MIMIMITranslator extends React.Component {
  render() {
    return <p>{this.props.textValue.replace(/[aeiou]/gi, "i")}</p>;
  }
}

export default MIMIMITranslator;
