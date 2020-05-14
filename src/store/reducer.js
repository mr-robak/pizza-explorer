// src/store/reducer.js
const initialState = {
  user: {
    name: "Helva",
    favorites: [161235, 67283],
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
          },
        ],
      };
    }
    case "TOGGLE_FAVORITE_PIZZA": {
      const newLike = action.payload;
      const oldFavorites = [...state.user.favorites];
      if (oldFavorites.find((id) => id === newLike)) {
        return {
          ...state,
          user: {
            ...state.user,
            favorites: oldFavorites.filter((id) => id !== newLike),
          },
        };
      } else {
        return {
          ...state,
          user: { ...state.user, favorites: [...oldFavorites, newLike] },
        };
      }
    }

    default: {
      return state;
    }
  }
}
