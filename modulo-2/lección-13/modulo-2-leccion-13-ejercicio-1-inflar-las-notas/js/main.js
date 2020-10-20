"use strict";

const marks = [5, 4, 6, 7, 9];

// Definimos que "mark" es cada uno de los elementos del array "marks" y se lo pasamos como parámetro a la función arrow
// Indicamos que el retorno de la función tiene que ser cada elemento del array + 1 punto
const sumOnePointMarks = (mark) => mark + 1;

// Declaramos una nueva función arrow y utilizamos el método map para que la función devuelva un nuevo array con los elementos modificados al
// aplicar como parámetro de esta función la función anterior, que indica que hay que sumar un 1 a cada elemento del array
const inflatedMarks = marks.map(sumOnePointMarks);

// Consoleamos y vemos que devuelve el nuevo array: (5) [6, 5, 7, 8, 10];
console.log(inflatedMarks);
