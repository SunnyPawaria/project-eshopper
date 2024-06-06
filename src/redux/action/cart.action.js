import {
  ADD_CART_ERROR,
  ADD_CART_START,
  ADD_CART_SUCCESS,
  EDIT_CART_ERROR,
  EDIT_CART_START,
  EDIT_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_START,
  GET_CART_SUCCESS,
} from "../constant/cart.constant";

export const getCartStart = () => ({
  type: GET_CART_START,
});

export const getCartSuccess = (data) => ({
  type: GET_CART_SUCCESS,
  payload: data,
});

export const getCartError = (error) => ({
  type: GET_CART_ERROR,
  payload: error,
});

export const addCartStart = (data) => ({
  type: ADD_CART_START,
  payload: data,
});

export const addCartSuccess = (data) => ({
  type: ADD_CART_SUCCESS,
  payload: data,
});

export const addCartError = (error) => ({
  type: ADD_CART_ERROR,
  payload: error,
});

export const updateCartStart = (data) => ({
  type: EDIT_CART_START,
  payload: data,
});

export const updateCartSuccess = (data) => ({
  type: EDIT_CART_SUCCESS,
  payload: data,
});

export const updateCartError = (error) => ({
  type: EDIT_CART_ERROR,
  payload: error,
});
