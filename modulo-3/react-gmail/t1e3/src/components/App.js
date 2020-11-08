import React from "react";
import Header from "./Header";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import emails from "../data/emails.json";
import "../stylesheets/App.css";

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
  const handleInboxFilter = () => {
    console.log("App: han clickado en Recibidos");
  };

  const handleDeleteFilter = () => {
    console.log("App: han clickado en Papelera");
  };

  const handleTextFilter = (data) => {
    console.log("App: han escrito en el campo de texto", data);
  };

  return (
    <div>
      <Header
        handleInboxFilter={handleInboxFilter}
        handleDeleteFilter={handleDeleteFilter}
        handleTextFilter={handleTextFilter}
      />

      <table className="table">
        <tbody>{renderEmails()}</tbody>
      </table>

      <EmailReader
        fromName={emails[0].fromName}
        fromEmail={emails[0].fromEmail}
        subject={emails[0].subject}
        body={emails[0].body}
      />
    </div>
  );
}

export default App;

// LIFTING ENTRE FICHERO MADRE-HIJA

// 1.- Fichero madre:
// ⦁	Creamos una función arrow dentro de la función render.
// ⦁	Esta función manejará el evento.
// ⦁	Dentro de return pasamos la función como una propiedad del componente: <Componente nombredelapropiedad={nombredelafunciónmanejadora}/>

// 2.- Fichero hija:
// ⦁	Ejecutar desde la función render del fichero hija y antes del return, la función manejadora como un método de props: props.nombredelafunciónmanejadora().
// ⦁	Si queremos pasar valores hacia la función madre tendríamos que incluirlos dentro del paréntesis.

// LIFTING ENTRE FICHERO ABUELA-MADRE-HIJA

// 1.- Fichero abuela:
// ⦁	Creamos una función arrow dentro de la función render.
// ⦁	Esta función manejará el evento.
// ⦁	Dentro de return pasamos la función manejadora como una propiedad del componente:
// <Componente nombredelapropiedad={nombredelafunciónmanejadora}/>

// 1.- Fichero madre:
// ⦁	Dentro de return pasamos la función manejadora del fichero abuela como una propiedad del componente a través de los props sin ejecutar:
// <Componente nombredelapropiedad={props.nombredelafunciónmanejadora}/>

// 2.- Fichero hija:
// ⦁	Ejecutar desde la función render del fichero hija y antes del return, la función manejadora como un método de props: props.nombredelafunciónmanejadora().

// Por último se pueden unificar nombres de props y métodos teniendo en cuenta que la prop de un fichero madre se convierte en el método del fichero hija.
// Las funciones y props, sin embargo, no tienen por qué tener el mismo nombre.
