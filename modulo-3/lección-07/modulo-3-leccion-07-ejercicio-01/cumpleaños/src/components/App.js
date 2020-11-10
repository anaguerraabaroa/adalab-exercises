import React, { useState } from "react";
import Birthday from "./Birthday";
import "../stylesheets/App.scss";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleCount = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="wrapper">
      <Birthday handleCount={handleCount} counter={counter} />
    </div>
  );
};

export default App;
