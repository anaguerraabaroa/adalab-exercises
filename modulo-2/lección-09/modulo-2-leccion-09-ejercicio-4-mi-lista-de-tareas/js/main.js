/* 

Paso 0: ARRAY
- Partimos del siguiente array de elementos/objetos:

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: false },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

Paso 1: RAZONAMIENTO INICIAL
- No debemos trabajar con un listado de tareas creado desde el HTML.
- Tenemos que recorrer el array de tareas y pintarlo en el HTML para generarlo al vuelo.
- Tenemos que trabajar de esta manera porque una vez terminado el ejercicio si eliminamos una tarea del array
  desde JS se pintará por defecto el estilo de la lista y del checked vacíos en el cuerpo de la página y si añadimos
  una tarea desde JS la consola dará error porque no tiene espacio para pintar la nueva tarea.

Paso 2: HTML
- Crear el HTML.
- Todos los elementos del HTML que NO vayan a sufrir modificaciones desde JS deben estar incluidos en el HTML.
- Los elementos que van a sufrir modificaciones desde JS NO deben estar incluidos en el HTML.

Paso 3: AÑADIR CLASES HTML
- Dar clases al HTML para poder llamar a los elementos desde JS.

Paso 4: DECLARAR CONSTANTES
- Declaramos la constante del elemento sobre el que queremos realizar algún tipo de acción.
const listElement = document.querySelector(".js-list");

Paso 5: RECORRER ARRAY Y AÑADIR CONTENIDO AL ELEMENTO DE HTML
- Para añadir contenido al elemento necesitamos recorrer el array de tareas (n) veces para que pinte dentro de la lista
el número indeterminado de tareas que existen dentro del array.
- Si sólo queremos que pinte una tarea podemos utilizar el método listElement.innerHTML = `<li>Tarea</li>`.
- Pero si queremos que recorra todo el array debemos utilizar un bucle tipo "for" que recorra el array y vaya pintando en
la lista uno a uno los elementos recogidos en cada iteración (o vuelta) definida por el índice (i).
- Para pintar los elementos utilizamos una variable dentro de <li> que haga referencia a cada iteración sobre el array
y además acceda al valor interno del array "name".
- Conseguimos que pinte una tarea en cada iteración con "+=" que suma el valor de la nueva iteración a la iteración
anterior. Si sólo usamos "=" cada iteración sobreescribe a la anterior, pero lo que necesitamos es ir sumándolas a las
que ya existen.
- Al añadir las tareas aprovechamos para incluir también la estructura del input checkbox que debe acompañar a las
tareas dentro del HTML. Podemos incluir todo lo que queramos: clases, ids, etc.

const listElement = document.querySelector(".js-list");

for (let i = 0; i < tasks.length; i++) {
  listElement.innerHTML += `<li>
  <input type="checkbox"/>${tasks[i].name}
 </li>`;
}

Paso 6: TACHAR TAREAS COMPLETADAS DEL LISTADO
- Tachar es una propiedad dinámica que vamos a tener que trabajar desde JS porque no se aplicará por defecto sino
cuando el usuario accione el checkbox.
- Para ello tendremos que añadir una clase en CSS que aplique el tachado sobre las tareas.
- Podemos aplicar esta clase tanto a cada elemento de la lista <li></li> como al texto de cada tarea. Si decidimos
lo segundo, tendríamos que añadir una etiqueta <span></span> al texto de la siguiente manera:

const listElement = document.querySelector(".js-list");

for (let i = 0; i < tasks.length; i++) {
  listElement.innerHTML += `<li>
  <input type="checkbox" /><span>${tasks[i].name}</span>
</li>`;

- Una vez decidimos sobre qué elemento vamos a añadir la clase razonamos qué queremos que aparezca en la página al
cargarla.
- El enunciado indica que al cargar la página debe aparecer el listado de tareas (ya lo hemos conseguido en los pasos
anteriores) y el estado de las mismas: la tarea 1 y 3 han sido completadas y las tareas 2 y 4 no se han terminado.
- Para ello tenemos que acceder a los datos del array nuevamente con la misma estructura utilizada para acceder al valor
de "name", pero esta vez para acceder al valor de "completed".
- Como tenemos dos condiciones que si se cumplen tienen que aplicar diferentes acciones sobre la lista (tachar tarea en
caso de haberse completado o no tacharla en caso de que la tarea esté pendiente de completar) debemos trabajar con un
condicional "if".
- Estos últimos pasos los aplicamos desde el bucle "for".

const listElement = document.querySelector(".js-list");

for (let i = 0; i < tasks.length; i++) {
  listElement.innerHTML += `<li>
  <input type="checkbox"/><span>${tasks[i].name}</span>
 </li>`;
  if (tasks[i].completed === true) {
    console.log(tasks[i].completed);
  } else {
    console.log(tasks[i].completed);
  }
}
console.log(tasks[i]); --> Acceder a todos los elementos/objetos del array
console.log(tasks[i].name); --> Acceder a la propiedad name del elemento/objeto del array
console.log(tasks[i].completed); --> Acceder a la propiedad completed del elemento/objeto del array

Paso 7: SIMPLIFICAR Y UNIFICAR CÓDIGO
- Decimos que si la tarea/condición está completa añada al HTML un contenido con la clase de CSS "completed" y si no está
completa añada otro contenido sin la clase.
- Además aprovechamos para añadir el atributo "checked" a la etiqueta de HTML input en función de la misma condición.

const listElement = document.querySelector(".js-list");

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].completed === true) {
    listElement.innerHTML += `<li class="completed">
  <input type="checkbox" checked/><span>${tasks[i].name}</span>
 </li>`;
  } else {
    listElement.innerHTML += `<li>
  <input type="checkbox"/><span>${tasks[i].name}</span>
 </li>`;
  }
}

- Como tenemos muchas líneas de código HTML iguales seguimos simplificando código.
- Para ello declaramos dos constantes: una para añadir la clase en función de si se cumple o no la condición y otra
para añadir el atributo también en función de la condición.
- Estas constantes no se pueden declarar dentro del condicional "if/else" porque sólo aplicarían dentro del condicional.
Como queremos que apliquen en función de cada iteración del bucle tenemos que sacarlas fuera del condicional.
- Además, como los valores van a ir cambiando con cada iteración del bucle, no pueden ser constantes por lo que tenemos
que declarlas como variables.

const listElement = document.querySelector(".js-list");

for (let i = 0; i < tasks.length; i++) {
  let completedClass;
  let checkedAttr;
  if (tasks[i].completed === true) {
    completedClass = "completed";
    checkedAttr = "checked";
  } else {
    completedClass = "";
    checkedAttr = "";
  }

  listElement.innerHTML += `<li class="${completedClass}">
<input type="checkbox" ${checkedAttr}/><span>${tasks[i].name}</span>
</li>`;
}

Paso 8: ESCUCHAR EVENTO
- Ahora tenemos que modificar el array en función de las acciones del usuario dentro de la página y pintar los cambios.
- Podríamos declarar una constante sobre todos los elementos del array checkbox que hemos incluido en el paso anterior con
la etiqueta de HTML <input></input>, pero como queremos aplicar buenas prácticas, en su lugar lo que hacemos
es añadir una clase al input en el HTML para trabajar sobre ella:

const listElement = document.querySelector(".js-list");

for (let i = 0; i < tasks.length; i++) {
  let completedClass;
  let checkedAttr;
  if (tasks[i].completed === true) {
    completedClass = "completed";
    checkedAttr = "checked";
  } else {
    completedClass = "";
    checkedAttr = "";
  }

  listElement.innerHTML += `<li class="${completedClass}">
<input type="checkbox" ${checkedAttr} class="js-list-check"/><span>${tasks[i].name}</span>
</li>`;
}

- A continuación declaramos la función handler de entrada con un console.log y un mensaje para confirmar que el evento
activa la función.
- Y por último declaramos el evento que va a llamar a la función.
- Como necesitamos acceder a cada elemento del array para que el evento suceda sobre cada uno de ellos utilizamos un
bucle for/of para recorrer el array.
- Dentro del bucle declaramos una constante para definir a cada uno de los elementos de la lista.
- Incluimos también el evento dentro del bucle para indicar que queremos que el evento escuche cuando el usuario pincha
sobre cada uno de los elementos del array.

const listElement = document.querySelector(".js-list");

for (let i = 0; i < tasks.length; i++) {
  let completedClass;
  let checkedAttr;
  if (tasks[i].completed === true) {
    completedClass = "completed";
    checkedAttr = "checked";
  } else {
    completedClass = "";
    checkedAttr = "";
  }

  listElement.innerHTML += `<li class="${completedClass}">
<input type="checkbox" ${checkedAttr} class="js-list-check"/><span>${tasks[i].name}</span>
</li>`;
}

const checkboxElements = document.querySelectorAll(".js-list-check");

function toggleTask() {
  console.log("Me han clickado");
}

for (const checkboxElement of checkboxElements) {
  console.log(checkboxElement);
  checkboxElement.addEventListener("change", toggleTask);
}

Paso 9: IDENTIFICAR LOS ELEMENTOS QUE VAN A SUFRIR LOS CAMBIOS DEL EVENTO
- El evento acciona los cambios que debe realizar la función.
- Dentro del parámetro "evento" el navegador devuelve la información de la acción que ha ocurrido y sobre qué elemento
ha ocurrido la acción (esto último viene definido por event.target o event.currentTarget) entre otros datos.
- Para indicar al navegador que tiene que pintar cambios en cada uno de los elementos del array en función de la acción
que realice la usuaria es necesario introducir un identificador único en cada elemento del HTML.
- Esto lo hacemos añadiendo un identificador con una variable que contenga el índice del array (i) dentro del HTML.
- Después a la función le decimos que tiene que acceder al identificador único del array para identificar sobre qué
elemento ha realizado la acción el usuario y sobre qué elemento debe realizar y pintar los cambios.
- Para ayudarnos podemos declarar una constante con el valor del identificador único y después usar esa constante para
realizar y pintar los cambios.

const listElement = document.querySelector(".js-list");

for (let i = 0; i < tasks.length; i++) {
  let completedClass;
  let checkedAttr;
  if (tasks[i].completed === true) {
    completedClass = "completed";
    checkedAttr = "checked";
  } else {
    completedClass = "";
    checkedAttr = "";
  }

  listElement.innerHTML += `<li class="${completedClass}">
<input type="checkbox" ${checkedAttr} class="js-list-check" id="${i}"/><span>${tasks[i].name}</span>
</li>`;
}

const checkboxElements = document.querySelectorAll(".js-list-check");

function toggleTask(event) {
console.log("Me han clickado", event); --> Para investigar la información dentro del evento y ver qué elemento
ha accionado el evento
console.log("Me han clickado", event.target); --> Para investigar qué atributo único de HTML necesitamos leer
console.log("Me han clickado", event.target.id); --> Para investigar el índice del elemento del array al que accedemos
desde el atributo único
console.log("Me han clickado", event.target.type); --> Para investigar el tipo del elemento seleccionado. En este caso
devolvería el tipo checkbox
  const clickedId = event.target.id;
  tasks[clickedId].completed = true;
}

for (const checkboxElement of checkboxElements) {
  console.log(checkboxElement);
  checkboxElement.addEventListener("change", toggleTask);
}

Paso 10: PINTAR LOS CAMBIOS ACCIONADOS POR EL EVENTO SOBRE LOS ELEMENTOS
- Ahora queremos que los valores del listado que aparecen al cargar la página se repinten al activar un checkbox desde
la función toggleTask.
- Para ello deberíamos reutilizar el primer "for" que era el que pintaba el listado de tareas en el HTML al cargar
la página.
- Para poder reutilizarlo debemos meterlo dentro de una nueva función y después invocar a la función desde fuera para que
siga pintando el listado de tareas al cargar la página.
- A continuación tendremos que volver a invocar la función paintTasks desde la función toggleTask para que el listado de 
tareas se repinte con los nuevos valores al activar un checkbox.
- Lo que ocurre al ejecutar los pasos anteriores es que al activar un checkbox duplica la lista con los valores finales,
ya que en todo momento le estamos indicando que concatene el innerHTML anterior pero nunca que lo vacíe.
- Para evitar que la lista se duplique y en su lugar sobreescriba los nuevos valores al activar un checkbox, tenemos
que indicar a la función fuera del "for" que cuando se active el checkbox y entre en la función elimine el contenido 
inicial del <ul></ul> que aparece al cargar la página y cargue los nuevos valores.
- Esto se hace fuera del "for" porque sólo nos interesa que los valores se borren una vez al entrar en la función, 
después queremos que se concatenen con el bucle.
- Al activar un checkbox y repintar los elementos de la lista, el evento deja de funcionar porque sigue escuchando sobre
los elementos antiguos de la lista, no se actualiza automáticamente para escuchar los nuevos elementos.
- Como cada vez que se repinte la lista tengo que volver a escuchar cada elemento y ejecutar una acción, incluimos en 
una nueva función la constante y el bucle con el evento.
- Invocamos a la nueva función después de ejecutar la función paintTasks para que el evento escuche al cargar la página 
y desde dentro de la función toggleTask para que escuche cada vez que se accione un checkbox.

function paintTasks() {
  const listElement = document.querySelector(".js-list");
  listElement.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let completedClass;
    let checkedAttr;
    if (tasks[i].completed === true) {
      completedClass = "completed";
      checkedAttr = "checked";
    } else {
      completedClass = "";
      checkedAttr = "";
    }

    listElement.innerHTML += `<li class="${completedClass}">
<input type="checkbox" ${checkedAttr} class="js-list-check" id="${i}"/><span>${tasks[i].name}</span>
</li>`;
  }
}

paintTasks();
listenEvents();

function toggleTask(event) {
  console.log("Me han clickado", event.target.id);
  const clickedId = event.target.id;
  tasks[clickedId].completed = true;
  paintTasks();
  listenEvents();
}

function listenEvents() {
  const checkboxElements = document.querySelectorAll(".js-list-check");
  for (const checkboxElement of checkboxElements) {
    console.log(checkboxElement);
    checkboxElement.addEventListener("change", toggleTask);
  }
}

Paso 11: CAMBIAR VALOR DE LAS TAREAS AL VALOR CONTRARIO
- Como tenemos el ejercicio actualmente sólo podemos marcar y tachar tareas. No podemos desmarcar ni destachar tareas.
- Para cambiar el aspecto de las tareas en función de si el checkbox está marcado o no, tenemos que sobreescribir el 
valor de una tarea consigo misma indicando que cambie al valor contrario en función del valor inicial. 
- De esta manera, si el checkbox está marcado y la tarea tachada al volver a pulsar el checkbox éste se desmarcará y la 
tarea se destachará y viceversa, si el checkbox no está marcado ni la tarea tachada al pulsar el checkbox éste se marcará 
y la tarea se tachará.
- TIP: Miguel recomienda invocar a las funciones que determinan el valor inicial al cargar la página al final del documento JS
para que todo se haya declarado antes. 

*/

// Array
const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: false },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

// Function paint: paint data
function paintTasks() {
  const listElement = document.querySelector(".js-list");
  listElement.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let completedClass;
    let checkedAttr;
    if (tasks[i].completed === true) {
      completedClass = "completed";
      checkedAttr = "checked";
    } else {
      completedClass = "";
      checkedAttr = "";
    }

    listElement.innerHTML += `<li class="${completedClass}">
<input type="checkbox" ${checkedAttr} class="js-list-check" id="${i}"/><span>${tasks[i].name}</span>
</li>`;
  }
}

// Function handler: modify data
function toggleTask(event) {
  console.log("Me han clickado", event.target.id);
  const clickedId = event.target.id;
  tasks[clickedId].completed = !tasks[clickedId].completed;
  paintTasks();
  listenEvents();
}

// Function event: listen events
function listenEvents() {
  const checkboxElements = document.querySelectorAll(".js-list-check");
  for (const checkboxElement of checkboxElements) {
    console.log(checkboxElement);
    checkboxElement.addEventListener("change", toggleTask);
  }
}

// Start app
paintTasks();
listenEvents();

/* 

Resumen:
1.- En este tipo de ejercicios siempre tendremos que hacer dos cosas: pintar en pantalla y escuchar eventos.
2.- Complejidad del ejercicio: los propios elementos pintados son los mismos que tenemos que escuchar.
3.- Por esta razón lo que hacemos siempre es escuchar después de pintar.
4.- Para ello creamos 3 funciones: una función que sólo pinta, otra que escucha los eventos y la manejadora de los eventos.
5.- Ejecutamos las funciones una detrás de otra: primero la que pinta, después la que escucha los eventos y finalmente
la que maneja los eventos.
6.- Función que pinta: se encarga de que lo que tenemos en los datos aparezca igual en el HTML.
7.- Función manejadora: se encarga de modificar los datos del array y de ejecutar que los datos se repinten y se reescuchen.
8.- La manera de hacer que la función que pinta y la función manejadora interactuen es mediante el atributo identificador
de HTML (id).

*/
