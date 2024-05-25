import { ADD_CATEGORY_ERROR, ADD_CATEGORY_START, ADD_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_START, GET_CATEGORY_SUCCESS } from "../constant/category.constant";

export const getCategoryStart = () => ({
    type: GET_CATEGORY_START,
    
})
export const getCategorySuccess = (data) => ({
    type: GET_CATEGORY_SUCCESS,
    payload: data
})
export const getCategoryError = (error) => ({
    type: GET_CATEGORY_ERROR,
    payload: error
})
export const addCategoryStart = (data) => ({
    type: ADD_CATEGORY_START,
    payload: data
})
export const addCategorySuccess = (data) => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: data
})
export const addCategoryError = (error) => ({
    type: ADD_CATEGORY_ERROR,
    payload: error
})