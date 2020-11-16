import React from "react";
import Number from "./Number";
import "../stylesheets/App.scss";

const numbers = [1, 4, 6, 8, 45, 89];
const numberList = numbers.map((number, index) => {
  return <Number key={index} number={number} />;
});

class App extends React.Component {
  render() {
    return <ul className="numberList">Listado de números: {numberList}</ul>;
  }
}

export default App;
