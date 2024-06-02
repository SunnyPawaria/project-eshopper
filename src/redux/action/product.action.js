import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
} from "../constant/product.constant";

export const getProductStart = () => ({
  type: GET_PRODUCT_START,
});

export const getProductSuccess = (data) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data,
});

export const getProductError = (error) => ({
  type: GET_PRODUCT_ERROR,
  payload: error,
});

export const addProductStart = (data) => ({
  type: ADD_PRODUCT_START,
  payload: data,
});

export const addProductSuccess = (data) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: data,
});

export const addProductError = (error) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});
