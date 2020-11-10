import React from "react";

const Birthday = (props) => {
  const handleClick = function () {
    props.handleCount();
  };

  return (
    <>
      <p className="text">Hoy tengo {props.counter} años de edad</p>
      <button type="button" className="button" onClick={handleClick}>
        Hazme más viejo
      </button>
    </>
  );
};
export default Birthday;
