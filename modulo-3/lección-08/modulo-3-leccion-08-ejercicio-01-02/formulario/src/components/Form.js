import React from "react";
import "../stylesheets/_Form.scss";

const Form = (props) => {
  //console.log(props.handleInput);
  const handleChange = (ev) => {
    //console.log("Me han cambiado", ev.target.value);
    const inputValue = ev.target.value;
    const inputId = ev.target.id;
    props.handleInput(inputId, inputValue);
  };
  return (
    <section className="section">
      <h1 className="section__title">
        Rellena el contenido de tu serie favorita
      </h1>
      <form className="form" action="">
        <label htmlFor="title" className="label">
          Título:
        </label>
        <input
          id="title"
          value={props.title}
          type="text"
          className="title"
          placeholder="ej: Friends"
          onChange={handleChange}
        />
        <label htmlFor="description" className="label">
          Sinopsis:
        </label>
        <textarea
          id="description"
          value={props.description}
          name="description"
          className="description"
          placeholder="ej: La serie trata sobre la vida de un grupo de amigos..."
          onChange={handleChange}
        ></textarea>
        <label htmlFor="select" className="label">
          Selecciona idioma:
        </label>
        <select
          id="select"
          value={props.language}
          name="select"
          className="select"
          onChange={handleChange}
        >
          <option value="" disabled>
            Idioma
          </option>
          <option id="language" value="Español">
            Español
          </option>
          <option id="language" value="Inglés">
            Inglés
          </option>
          <option id="language" value="Portugués">
            Portugués
          </option>
        </select>
      </form>
      <article className="card">
        <h2 className="film__title">Título: {props.title}</h2>
        <p className="film__description">Sinopsis: {props.description}</p>
        <p className="film__language">Idioma: {props.language}</p>
      </article>
    </section>
  );
};

export default Form;
