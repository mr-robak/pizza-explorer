import React from "react";
import { useSelector, useDispatch } from "react-redux";
import reducer from "../store/reducer";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  const sortedPizzass = reduxState.pizzas.sort((pizzaA, pizzaB) => {
    return pizzaB.bought - pizzaA.bought;
  });
  return sortedPizzass;
};

const selectLiked = (reduxState) => {
  return;
};

export default function PizzaList() {
  const dispatch = useDispatch(reducer);

  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  const renderPizzas = pizzas.map((pizza) => {
    const { id, name, description, bought } = pizza;

    function toggle(event) {
      //   console.log("event.target:", event.target.id);
      dispatch({
        type: "TOGGLE_FAVORITE_PIZZA",
        payload: id,
      });
    }
    return (
      <li key={id}>
        <strong>{name}</strong> - you bought: {bought} <p>{description}</p>{" "}
        Bought: {bought}
        <button onClick={toggle}>
          {user.favorites.findIndex((favId) => favId === id) === -1 ? "♡" : "♥"}
        </button>
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
