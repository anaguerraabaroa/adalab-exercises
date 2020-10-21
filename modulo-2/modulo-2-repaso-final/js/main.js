"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");

let palettes = [];

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
      paintPalletes();
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

function paintPalletes() {
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
  let html = "";
  for (const palette of palettes) {
    html += "<li>";
    html += `<h2 class= "palettes__name">${palette.name}</h2>`;
    html += `<div class="palettes__colors">`;
    /*Paso 16: Como los colores de las paletas están definidos en el archivo .json dentro de otro array, necesitamos recorrerlo para
    poder acceder a los datos, por lo que necesitamos otro bucle "for" (bucle anidado)
    Como tenemos que acceder a un array dentro de otro array tenemos que utilizar el método palette.colors.
    Dentro del bucle estamos definiendo la constante color, por eso podemos usar esta misma constante para interpolar el color.
    */
    for (const color of palette.colors) {
      html += `<div class="palettes__color" style="background-color:#${color}"></div>`;
    }
    /* Paso 18: Cerramos las etiquetas <li> y <div> después de que los 5 <div> sean incluidos dentro del <div> contenedor en el bucle anidado */
    html += "</div>";
    html += "</li>";
  }
  /*Paso 17: console.log(html); --> Consoleamos para comprobar en DevTools que está renderizando el HTML y cierra las etiquetas <li> y <div> aunque
  no las hayamos cerrado aún nosotras. Aunque esto aparezca es necesario que nosotras las cerremos desde JS. */
  // Paso 15: incluimos la variable dentro del elemento <ul> para confirmar que el bucle está funcionando y concatenando los resultados
  palettesContainer.innerHTML = html;
}

getData();

// Paso 19: Aplicar estilos con CSS.
// Paso 20: Pintar muchas paletas cambiando la URL del endpoint al que apunta la petición fetch y que viene indicado en el enunciado del ejercicio.
