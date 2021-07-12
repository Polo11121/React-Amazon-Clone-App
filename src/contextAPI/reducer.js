export const initialState = {
  user: null,
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return { ...state, user: action.user };

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export const getBasketTotal = (basket) => {
  if (basket.length === 0) return 0;
  else {
    return basket?.reduce((x, y) => x + y.price, 0);
  }
};
export default reducer;
