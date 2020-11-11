import React, { useState } from "react";
import Birthday from "./Birthday";
import Gifts from "./Gifts";
import "../stylesheets/App.scss";

const App = (props) => {
  const [counter, setCounter] = useState(0);
  const [giftsCounter, setGiftCounter] = useState(0);
  const handleCount = () => {
    setCounter(counter + 1);
  };
  const handleGiftCount = () => {
    setGiftCounter(giftsCounter + 1);
  };
  return (
    <div className="wrapper">
      <Birthday handleCount={handleCount} counter={counter} />
      <Gifts handleGiftCount={handleGiftCount} giftCounter={giftsCounter} />
    </div>
  );
};

export default App;
