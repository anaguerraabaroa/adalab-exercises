import React from "react";

const Gifts = (props) => {
  const handleClick = function () {
    props.handleGiftCount();
  };

  return (
    <>
      <p className="text">Tengo {props.giftCounter} regalos</p>
      <button type="button" className="button" onClick={handleClick}>
        Dame regalos
      </button>
    </>
  );
};
export default Gifts;
