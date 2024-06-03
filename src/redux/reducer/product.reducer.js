import {
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
} from "../constant/product.constant";

const initialState = {
  products: localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [],
};

let d = [];

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      d = [...action.payload];

      localStorage.setItem("product", JSON.stringify(d));

      return {
        ...state,
        products: d,
      };

    case ADD_PRODUCT_SUCCESS:
      d = [...state.products, action.payload];

      localStorage.setItem("product", JSON.stringify(d));

      return {
        ...state,
        products: d,
      };

    default:
      return state;
  }
};

export default ProductReducer;
