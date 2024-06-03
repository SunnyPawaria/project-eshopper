import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_START,
  EDIT_PRODUCT_SUCCESS,
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

export const editProductStart = (data, id) => ({
  type: EDIT_PRODUCT_START,
  payload: {
    data,
    id,
  },
});

export const editProductSuccess = (data, id) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: {
    data,
    id,
  },
});

export const editProductError = (error) => ({
  type: EDIT_PRODUCT_ERROR,
  payload: error,
});

export const deleteProductStart = (id) => ({
  type: DELETE_PRODUCT_START,
  payload: id,
});

export const deleteProductSuccess = (id) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

export const deleteProductError = (error) => ({
  type: DELETE_PRODUCT_ERROR,
  payload: error,
});
