import React from "react";
import "../stylesheets/_Form.scss";

const Form = (props) => {
  //console.log(props.handleInput);
  const handleChange = (ev) => {
    //console.log("Me han cambiado", ev.target.value);
    const inputValue = ev.target.value;
    const inputId = ev.target.id;
    const inputName = ev.target.name;
    props.handleInput(inputId, inputValue, inputName);
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
        <article className="clasification">
          <h2 className="clasification__title">Clasificación por edades:</h2>
          <label htmlFor="age1">
            <input
              id="age1"
              type="radio"
              value="Todos los públicos"
              name="age"
              defaultChecked
              onChange={handleChange}
            />
            Todos los públicos
          </label>
          <label htmlFor="age2">
            <input
              id="age2"
              type="radio"
              value="7"
              name="age"
              onChange={handleChange}
            />
            7
          </label>
          <label htmlFor="age3">
            <input
              id="age3"
              type="radio"
              value="12"
              name="age"
              onChange={handleChange}
            />
            12
          </label>
          <label htmlFor="age4">
            <input
              id="age4"
              type="radio"
              value="16"
              name="age"
              onChange={handleChange}
            />
            16
          </label>
          <label htmlFor="age5">
            <input
              id="age5"
              type="radio"
              value="18"
              name="age"
              onChange={handleChange}
            />
            18
          </label>
        </article>
        {/* Pending:
            - Select max 3 checkboxes
            - Paint more than one genre. Now they overwrite each other.
        */}
        <article className="genres">
          <h2 className="genres__title">Géneros:</h2>
          <label htmlFor="genres">
            <input
              id="genres1"
              type="checkbox"
              value="Comedia"
              name="genres"
              onChange={handleChange}
            />
            Comedia
          </label>
          <label htmlFor="genres">
            <input
              id="genres2"
              type="checkbox"
              value="Drama"
              name="genres"
              onChange={handleChange}
            />
            Drama
          </label>
          <label htmlFor="genres">
            <input
              id="genres3"
              type="checkbox"
              value="Fantasía"
              name="genres"
              onChange={handleChange}
            />
            Fantasía
          </label>
          <label htmlFor="genres">
            <input
              id="genres4"
              type="checkbox"
              value="Acción"
              name="genres"
              onChange={handleChange}
            />
            Acción
          </label>
          <label htmlFor="genres">
            <input
              id="genres5"
              type="checkbox"
              value="Familia"
              name="genres"
              onChange={handleChange}
            />
            Familia
          </label>
          <label htmlFor="genres">
            <input
              id="genres6"
              type="checkbox"
              value="Terror"
              name="genres"
              onChange={handleChange}
            />
            Terror
          </label>
        </article>
      </form>
      <article className="card">
        <p className="film__title">Título: {props.title}</p>
        <p className="film__description">Sinopsis: {props.description}</p>
        <p className="film__language">Idioma: {props.language}</p>
        <p className="film__clasification">
          Clasificación por edades: {props.age}
        </p>
        <p className="film__genres">Género: {props.genres}</p>
      </article>
    </section>
  );
};

export default Form;
