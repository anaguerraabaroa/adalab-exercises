"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");

let palettes = [];
let favouritesLis = [];

function getData() {
  // Paso 1: Petición fetch al servidor con la URL proporcionada en el ejercicio

  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
  )
    // Paso 2: Recoger datos del servidor (respuesta del servidor) en una función/promesa then

    .then((response) => {
      // Paso 3: console.log(response); --> Consolear la respuesta del servidor para confirmar que estoy recibiendo respuesta

      // Paso 4: parsear/transformar la información que recibo del servidor a formato .json en el retorno de la función

      return response.json();
    })

    /* Paso 5: declarar una nueva función/promesa then que recoge como parámetro de la función el retorno de la primera función/promesa
    para manipular los datos como necesitemos */

    .then(function (data) {
      /* Paso 6: console.log(data); --> Consolear el parámetro de la función seguido de alguno de los valores del objeto que contiene (.version, .palettes) 
      para confirmar que podemos acceder a todos los datos del archivo .json */

      /* Paso 7: Como la información que realmente nos interesa del objeto que nos devuelve el archivo .json es la de palettes, lo mejor es simplificar
      los datos con los que estamos trabajando. 
      Para ello, transformamos el objeto en un nuevo array más pequeño. 
      Para conformar el nuevo array primero declaramos una variable global (let palettes) fuera de la función para que se pueda utilizar siempre que 
      sea necesario. 
      A continuación modificamos el valor de la variable global desde dentro de la función indicando que lo que nos interesa son los datos de palettes 
      que están dentro de data y esto conforma el nuevo array.     
      */

      palettes = data.palettes;

      // Paso 8: console.log(palettes); --> Consoleamos para confirmar que hemos creado un nuevo array con los datos simplificados

      paintPalettes();
      favouritesPalette();
      setLocalStorage();
    });
}

/* Paso 10: Para optimizar nuestro código y poder utilizar esta información cuando sea necesario en el futuro, como por ejemplo cachear datos con el
LocalStorage, es necesario incluir la petición fetch dentro de una función e invocarla desde el final del documento JS para que cargue los datos al 
cargar la página. Posteriormente podremos disponer de los datos de esta función al invocarla desde cualquier otra porción de código. 
*/

/* Paso 11: Para optimizar nuestro código lo mejor es separarlo en diferentes funciones según la acción que realicen dichas funciones. 
Por esta razón separamos la función con la petición/transformación de datos de la función que pinta los datos en el HTML.
Tenemos que pintar los datos que no cambian en el HTML, pero el resto los debemos abarcar desde JS porque se trata de datos dinámicos que van a cambiar 
en función de los datos que retorne el servidor.
De esta manera incluimos en el HTML solamente una lista <ul> que no va a cambiar y decidimos que las paletas van a ser los elementos <li> de la lista 
que se incluirán desde JS. Cada <li> va a estar compuesto por un <div> contenedor (paleta) que encierra 5 <div> (uno por cada color de la paleta).
Entonces desde el archivo JS seleccionamos el elemento de HTML sobre el que vamos a trabajar (<ul>) declarando una constante con querySelector y la clase 
correspondiente al principio del documento JS.
*/

/* Paso 12: Invocamos a la función que pinta los datos del servidor en el HTML desde dentro de la segunda función/promesa then, ya que necesitamos que 
los datos se pinten una vez hayan sido modificados. 
Si invocamos a la función desde fuera de la segunda promesa, estaría a la altura de la petición fetch, cuando se han solicitado los datos al servidor 
pero no se ha recibido respuesta y los datos no han sido transformados a .json, ni manipulados para crear el nuevo array más sencillo.
*/

function paintPalettes() {
  // Paso 13: console.log("Pintar") --> Consoleamos para confirmar que la función getData está llamando a la función paintPalletes

  /* Paso 14: Sabemos que cada paleta va a ser un elemento de la lista y el servidor nos retorna un array con el nombre de la paleta y los colores que la
  forman.
  Para poder acceder a cada uno de los elementos que conforman el array palettes es necesario recorrerlo con un bucle "for" e ir guardando dentro 
  de una variable (html) el resultado de cada iteración concatenándolo, ya que luego este resultado lo tenemos que incluir dentro de un inner.HTML.
  Declaramos la variable fuera del bucle porque al estar vacía, si la incluimos dentro, en cada iteración va a vaciar la variable y 
  machacar los anteriores <li>
  Con el bucle "for...of" cada vez que queramos acceder a un elemento del array tenemos que usar palette.valor (en este caso el valor puede ser name y/o
  puede ser colors). 
  Con un bucle clásico tendríamos que acceder usando palettes[i].name.
  No cerramos la etiqueta <li> dentro del primer "for" hasta que los 5 <div> estén incluidos dentro porque de lo contrario se pintarían fuera del <div>
  contenedor.
*/

  /* Paso 28: Para conseguir incluir el identificador único podemos utilizar el índice de un bucle clásico que vaya recogiendo el valor de cada iteración 
  "i" y luego lo interpolamos en cada elemento <li> a medida que se vayan creando. (TIP: Con un bucle "for...of" sólo podemos acceder al valor de un array 
  pero no a su posición. Esto sólo lo podemos conseguir con un for clásico).
 Para hacer esto cambiamos el bucle "for...of" que habíamos creado originalmente dentro de la función paintPalettes por un bucle clásico.
 Al cambiarlo por un bucle clásico, también tenemos que cambiar la interpolación de la etiqueta <h2> por el método que incluye el índice. */

  /* Paso 29: Con el id único ya podemos identificar cuál es el elemento <li> que se ha clickado utilizando el método ev.currentTarget.id.
  Como el id es un atributo de una etiqueta HTML se trata de un string, por lo que lo convertimos a número con parseInt para evitar problemas futuros
  con esta función, aunque ahora mismo no genere problemas como string.
 */

  /* Paso 36: Una vez que hemos conseguido que los elementos <li> se añadan o quiten del array al clickar sobre ellos tenemos que añadirle la clase para
que cambie el color de fondo al seleccionarlos como favoritos.
Para ello declaramos una variable sin definir dentro del bucle "for" de la función paintPalettes, ya que lo correcto es que la clase se añada desde 
la función que pinta los <li>.
El valor de la variable se va a ir rellenando al recorrer el bucle.
Para ello vamos a reutilizar con un nuevo nombre las constantes del método indexOf que determinan si un elemento ha sido seleccionado como favorito o no y 
con un condicional vamos a añadir o quitar las clases.
Además tenemos que interpolar la clase en el elemento <li>.
Y por último cada vez que añadimos un <li> a favoritos tenemos que invocar de nuevo a la función paintPalletes y volver a escuchar el evento invocando a
la función listenPalette desde la función favouritesPalette.
*/

  let html = "";
  for (let i = 0; i < palettes.length; i++) {
    let classF;
    const favouriteIndex = favouritesLis.indexOf(i);
    const favourite = favouriteIndex !== -1;

    if (favourite === true) {
      classF = "palettes__item--favourite";
    } else {
      classF = "";
    }
    html += `<li class="js-palette-item ${classF}" id="${i}">`;
    html += `<h2 class= "palettes__name">${palettes[i].name}</h2>`;
    html += `<div class="palettes__colors">`;

    /*Paso 16: Como los colores de las paletas están definidos en el archivo .json dentro de otro array, necesitamos recorrerlo para
    poder acceder a los datos, por lo que necesitamos otro bucle "for" (bucle anidado)
    Como tenemos que acceder a un array dentro de otro array tenemos que utilizar el método palette.colors.
    Dentro del bucle estamos definiendo la constante color, por eso podemos usar esta misma constante para interpolar el color.
    */

    for (const color of palette.colors) {
      html += `<div class="palettes__color" style="background-color:#${color}"></div>`;
    }
    /* Paso 18: Cerramos las etiquetas <li> y <div> después de que los 5 <div> sean incluidos dentro del <div> contenedor en el bucle anidado. */

    html += "</div>";
    html += "</li>";
  }
  /*Paso 17: console.log(html); --> Consoleamos para comprobar en DevTools que está renderizando el HTML y cierra las etiquetas <li> y <div> aunque
  no las hayamos cerrado aún nosotras. Aunque esto aparezca es necesario que nosotras las cerremos desde JS. */

  // Paso 15: incluimos la variable dentro del elemento <ul> para confirmar que el bucle está funcionando y concatenando los resultados.

  palettesContainer.innerHTML = html;
}

// Paso 19: Aplicar estilos con CSS.

// Paso 20: Pintar muchas paletas cambiando la URL del endpoint al que apunta la petición fetch y que viene indicado en el enunciado del ejercicio.

/* Paso 22: Declaramos la función que va a desencadenar el evento cada vez que hagamos click sobre alguno de los elementos <li> (paletas).
Incluimos como parámetro de la función el evento para poder trabajar sobre él. */

/* Paso 26: Invocamos a la función que selecciona las paletas favoritas desde dentro de la segunda función/promesa then, ya que necesitamos que 
el evento sea escuchado después de que las paletas se hayan pintado.
*/

const favouritesPalette = function (ev) {
  //Paso 25: console.log("escucho evento"); --> Consoleamos para comprobar que al hacer click sobre los <li> entramos en la función.

  /* Paso 27: Declaramos una constante para poder acceder a los valores del evento y utilizar currentTarget para identificar el elemento clickado <li>.
Además para poder identificar cuál de los elementos <li> ha sido clickado, necesitamos añadir un identificador único "id" que debe ser un valor dinámico
que se vaya agregando a cada uno de los <li> a medida que se vayan creando.*/

  const clicked = parseInt(ev.currentTarget.id);

  /* Paso 30: console.log(clicked); --> Consoleamos para comprobar que se están añadiendo los ids a los elementos <li>*/

  /* Paso 31: Declaramos una variable global al principio del archivo JS que contiene el array de favoritos ya que al hacer click sobre un <li> 
    necesitamos comprobar si su id se encuentra dentro del array de favoritos para incluirlo o sacarlo del mismo respectivamente y añadirle las clases 
    correspondientes. El array se declara vacío para ir llenándolo o vaciándolo según los <li> seleccionados por el usuario.
*/

  /* Paso 32: Para poder aplicar una clase cada vez que se haga click sobre un elemento <li> para seleccionarlo como favorito primero necesito verificar 
si el elemento se encuentra dentro del array de favoritos con un método array.find o array.indexOf. Este método recibe como parámetro una función por lo 
que tenemos que declararla y que devuelva como retorno el valor del elemento clickado <li>.
Utilizando estos métodos en la primera iteración del bucle me va a retornar que el valor del elemento <li> es undefined porque no se encuentra dentro del 
array todavía.
Para poder utilizar el valor undefined encerramos la función en una constante.
Después indicamos con un condicional que si el valor es undefined debe incluir el elemento <li> dentro del array de favoritos y si tiene algún otro valor
debe sacarlo del array.
*/

  const isFavorite = favoritesLis.find((click) => {
    return click;
  });

  if (isFavorite === undefined) {
    /* Paso 33: console.log("lo meto"); --> Consoleamos para comprobar que al hacer click sobre un elemento <li> para marcarlo como favorito lo mete dentro
    del array utilizando el método array.push */

    favoritesLis.push(clicked);
  } else {
    /* Paso 34: console.log("console.log("lo quito); --> Consoleamos para comprobar que al hacer click sobre un elemento <li> para marcarlo como favorito 
    lo saca del array utilizando el método array.splice */

    favoritesLis.splice(clicked);
  }

  /* Paso 35: Otra forma de hacerlo es utilizando el método array.indexOf.
Este método devuelve el índice/posición del elemento dentro del array y si no lo encuentra devuelve -1. Siempre va a responder con valores true/false.
Si indicamos que el valor del índice es diferente a -1 y lo encerramos en una constante, con un condicional podemos obtener si el elemento se encuentra 
o no dentro del array y actuar en consecuencia igual que con la opción anterior. 
El método array.splice recibe como parámetros la posición del elemento dentro del array y cuántos elementos debe eliminar*/

  const indexFav = favouritesLis.indexOf(clicked);
  const isFavourite = indexFav !== -1;

  if (isFavourite === false) {
    favouritesLis.push(clicked);
  } else {
    favouritesLis.splice(indexFav, 1);
  }
  paintPalletes();
  listenPalette();
};

/* Paso 21: Para poder seleccionar un elemento como favorito primero tenemos que escuchar un evento e identificar cuál va a ser el elemento clickado que
desencadenará el evento. En este caso, como queremos marcar como favoritas las paletas, debemos seleccionar todos los <li> con un querySelectorAll.
Para poder hacer esto primero tenemos que agregar una clase a los <li>.
A continuación declaramos una función que escuche el evento sobre cada uno de los elementos <li>.
Declaramos una constante dentro de la función con un array para seleccionar todos los elementos <li>. 
La constante no se puede declarar fuera de la función al principio del archivo JS porque al cargar la página todavía no hemos recibido los datos del
servidor, estos no han sido transformados y no hemos podido generar los elementos <li> al vuelo.
Para escuchar el evento sobre cada uno de los elementos del array declaramos un bucle "for... of" dentro de la función.
*/

function listenPalette() {
  //Paso 23: console.log("dentro"); --> Consoleamos para comprobar que entra en la función.

  const paletteItems = document.querySelectorAll(".js-palette-item");
  for (const palleteItem of paletteItems) {
    //Paso 24: console.log("dentro"); --> Consoleamos para comprobar que entra en el bucle for.

    palleteItem.addEventListener("click", favouritesPalette);
  }
}

/* Paso 36: Guardamos toda la lista de las paletas en el LS con el método setItem, pasando como parámetros una clave (nombre) y el valor de los datos
(.json).
Para poder almacenar datos en LS es necesario convertir el archivo .json a un string aplicando el método stringify sobre el array.
Invocamos a la función setLocalStorage desde la segunda promesa de la función getData para que al cargar la página guarde los datos del servidor en el LS.*/

function setLocalStorage() {
  localStorage.setItem("palettes", JSON.stringify(palettes));
}

/* Paso 37: Después nos interesa que al volver a cargar la página validemos si los datos del servidor están almacenados en el LS.
Si no están almacenados vuelve a hacer la petición al servidor, pero si están almacenados hace la petición directamente a los datos del LS para mejorar
los tiempos de ejecución.
Como en la función setLocalStorage convertimos los datos a un string, ahora para poder utilizarlos tenemos que parsearlos para convertirlos de nuevo en un
archivo .json. 
Entonces declaramos un condicional para indicar que si la petición al LS es igual a null, no devuelve nada y por lo tanto volvemos a pedir los datos
al servidor invocando a la función getData. Pero si la petición devuelve datos, asignamos estos datos al array e invocamos a las funciones de paintPaletes 
y listenPalette para poder utilizar estos datos.
*/

function getLocalStorage() {
  const localPalette = localStorage.getItem("palettes");
  const localPaletteJ = JSON.parse(localPalette);
  if (localPaletteJ === null) {
    getData();
  } else {
    palettes = localPaletteJ;
    paintPaletes();
    listenPalette();
  }
}

getData();
