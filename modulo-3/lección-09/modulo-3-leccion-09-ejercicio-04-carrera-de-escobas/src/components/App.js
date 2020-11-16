import React from "react";
import "../stylesheets/App.scss";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];

const App = () => {
  const [winner1, winner2, winner3] = users;
  //console.log(winner1.name, winner1.time);
  //console.log(winner2.name, winner2.time);
  //console.log(winner3.name, winner3.time);

  return (
    <>
      <h1>Podium carrera de escobas:</h1>
      <ul>
        <li>{`El primer puesto es para: ${winner1.name} que ha completado la carrera en ${winner1.time} minutos`}</li>
        <li>{`El segundo puesto es para: ${winner2.name} que ha completado la carrera en ${winner2.time} minutos`}</li>
        <li>{`El tercer puesto es para: ${winner3.name} que ha completado la carrera en ${winner3.time} minutos`}</li>
      </ul>
    </>
  );
};

// Otra forma de hacerlo aplicando métodos:
// const App = () => {
//   const filterWinners = users
//     .filter((user) => user.time > aquí habría que definir una condición para filtrar los 3 primeros )
//     .map((winner, index) => (
//       <li key={index}>
//         {winner.name}
//         {winner.time}
//       </li>
//     ));

//   return <ul>{filterWinners}</ul>;

// };

export default App;
