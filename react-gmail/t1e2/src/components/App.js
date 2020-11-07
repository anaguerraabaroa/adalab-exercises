import React from "react";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import emails from "../data/emails.json";
import "../stylesheets/App.css";

// 1.- Creamos un array de objetos en el fichero emails.json y lo importamos en App.js. El nombre del array sólo lo ponemos en el import, en el fichero del array ponemos el array directamente sin incluirlo dentro de una constante o variable.
// 2.- Tenemos que recorrer el array para extraer las propiedades que nos interesan y obtener un nuevo array sólo con estas propiedades.
// 3.- Para ello vamos a utilizar un método map.
// 4.- Creamos una constante que va a contener una función arrow que va a retornar el resultado del método map.
// 5.- A su vez el método map va a devolver el componente que se va a repetir con las propiedades que nos interesan dentro.
// 6.- Para llamar al array y extraer las propiedades que nos interesan para formar el nuevo array sólo con estas propiedades utilizamos objeto.propiedad y las incluimos dentro de cada propiedad del componente entre llaves.
// 7.- Como React necesita recibir una propiedad única para renderizar de forma eficiente, tenemos que incluirla dentro de las propiedades del componente con "key=". Se recomienda usar siempre el id si lo recibimos dentro de cada objeto. En su defecto se recomienda usar el index (i), devolviéndolo como parámetro del método map de la siguiente manera: emails.map((email, index).
// 8.- Después desde la función App llamamos entre llaves desde return a la función que genera el nuevo array ejecutándola (renderEmails()) para que pinte el resultado.

const renderEmails = () => {
  return emails.map((email) => {
    return (
      <EmailItem
        key={email.id}
        from={email.fromName}
        subject={email.subject}
        time={email.date}
      />
    );
  });
};

function App() {
  return (
    <div>
      <Header />

      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>

      <EmailReader />
    </div>
  );
}

export default App;
