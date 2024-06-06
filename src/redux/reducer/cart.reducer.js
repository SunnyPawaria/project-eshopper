import {
  ADD_CART_SUCCESS,
  EDIT_CART_SUCCESS,
  GET_CART_SUCCESS,
} from "../constant/cart.constant";

const initialState = {
  carts: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {
        subTotal: 0,
        tax: 0,
        grandTotal: 0,
        items: [],
        id: "",
      },
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_SUCCESS:
      let currentCart = action.payload.find(
        (cart) => cart.id === state.carts.id
      );

      if (currentCart) {
        localStorage.setItem("cart", JSON.stringify(currentCart));
        return {
          ...state,
          carts: currentCart,
        };
      }

      return {
        ...state,
      };

    case ADD_CART_SUCCESS:
    case EDIT_CART_SUCCESS:
      localStorage.setItem("cart", JSON.stringify(action.payload));
      return {
        ...state,
        carts: action.payload,
      };

    default:
      return state;
  }
};

export default CartReducer;