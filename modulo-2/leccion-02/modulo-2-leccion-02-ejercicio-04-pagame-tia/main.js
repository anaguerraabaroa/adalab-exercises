"use strict";
const sumElement = document.querySelector(".sum");
const totalPrice = 128;
const numberOfCustomers = 9;
const specialPrice = 2;
//Precio a pagar por comensal
sumElement.innerHTML = totalPrice / numberOfCustomers - specialPrice;
//Precio a pagar por Ana
sumElement.innerHTML = totalPrice / numberOfCustomers + specialPrice;

/* Mensaje que aparece en la consola al loguear sumElement por comensal
console.log(sumElement);
<p class=​"sum">​12.222222222222221​</p>​

Mensaje que aparece en la consola al loguear las constantes por comensal
console.log(totalPrice / numberOfCustomers - specialPrice);
12.222222222222221 */

/* Mensaje que aparece en la consola al loguear sumElement para la parte de Ana
console.log(sumElement);
<p class=​"sum">​16.22222222222222​</p>​ 

/* Mensaje que aparece en la consola al loguear las constantes para la parte de Ana
console.log(totalPrice / numberOfCustomers + specialPrice);
16.22222222222222 */
