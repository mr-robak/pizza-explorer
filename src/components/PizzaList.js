import React from "react";
import { useSelector } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  const sortedPizzass = reduxState.pizzas.sort((pizzaA, pizzaB) => {
    return pizzaA.bought - pizzaB.bought;
  });
  return sortedPizzass;
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const renderPizzas = pizzas.map((pizza) => {
    const { id, name, description, bought } = pizza;
    return (
      <li key={id}>
        {name} - <span>{description}</span> - {bought}
      </li>
    );
  });

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
      </p>
      <p>
        We have totall of <strong>{pizzas.length}</strong> pizzas on the menu!
      </p>
      <ul>{renderPizzas}</ul>
    </div>
  );
}
