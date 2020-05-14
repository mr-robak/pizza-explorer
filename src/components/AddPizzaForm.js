// src/components/AddPizzaForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import reducer from "../store/reducer";

export default function AddPizzaForm() {
  const [name, set_name] = useState("");
  const [description, set_description] = useState("");

  const dispatch = useDispatch(reducer);

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    const newPizza = { id: Date.now(), name: name, description: description };

    dispatch({ type: "ADD_PIZZA", payload: newPizza });

    console.log("new pizza:", name, description);

    set_name("");
    set_description("");
    // TODO:
    // - dispatch the ADD_PIZZA action
    // - clear the input fields
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => set_name(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => set_description(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}
