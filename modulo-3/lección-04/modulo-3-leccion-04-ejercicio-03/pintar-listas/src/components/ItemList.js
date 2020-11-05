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

const listOfItems = arrayOfItems.map((item, index) => {
  Item.defaultProps = {
    description: "No hay descripción",
  };
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
}

export default ItemList;
