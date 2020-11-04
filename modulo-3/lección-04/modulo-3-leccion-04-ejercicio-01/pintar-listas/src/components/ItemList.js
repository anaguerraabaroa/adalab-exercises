import React from "react";
import Item from "../components/Item";

const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
  {
    name: "Galletas de chocolate",
    description: "Galletas rellenas de chocolate",
    quantity: 3,
    category: "Galletas",
    price: 7,
  },
];

/* Ejercicio 1A: Para pintar un listado de datos React necesita que se recorra un array.
Utilizamos un método map para recorrer el array original y crear un nuevo array con los datos de cada objeto 
que tenemos que pasar al componente para pintarlo
Por otro lado, React solicita un identificador único por elemento para poder identificar el elemento que ha cambiado
y debe renderizar. Para ello lo recomendable es usar el id, pero como en este caso no contamos con ese dato devolvemos
como parámetro al método map el index (posición del elemento dentro del array) y lo usamos en el componente con el
atributo key 

const listOfItems = arrayOfItems.map((item, index) => {
  return (
    <Item
      key={index}
      name={item.name}
      description={item.description}
      quantity={item.quantity}
      category={item.quantity}
      price={item.price}
    />
  );
});

class ItemList extends React.Component {
  render() {
    return <ul className="item-list">{listOfItems}</ul>;
  }
}*/

/*Ejercicio 1B: primero filtramos el array para quedarnos solamente con los productos de precio inferior a 10 con el 
método filter y después creamos un nuevo array con estos productos con el método map*/

const listOfItems = arrayOfItems.filter((item) => item.price < 10);
const filterList = listOfItems.map((item, index) => {
  return (
    <Item
      key={index}
      name={item.name}
      description={item.description}
      quantity={item.quantity}
      category={item.quantity}
      price={item.price}
    />
  );
});

class ItemList extends React.Component {
  render() {
    return <ul className="item-list">{filterList}</ul>;
  }
}

export default ItemList;
