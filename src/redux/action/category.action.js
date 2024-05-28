import { ADD_CATEGORY_ERROR, ADD_CATEGORY_START, ADD_CATEGORY_SUCCESS, DELETE_CATEGORY_ERROR, DELETE_CATEGORY_START, DELETE_CATEGORY_SUCCESS, EDIT_CATEGORY_ERROR, EDIT_CATEGORY_START, EDIT_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_START, GET_CATEGORY_SUCCESS } from "../constant/category.constant";

export const getCategoryStart = () => ({
    type: GET_CATEGORY_START
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


export const editCategoryStart = (data, id) => ({
    type: EDIT_CATEGORY_START,
    payload: {
        data,
        id
    }
})

export const editCategorySuccess = (data, id) => ({
    type: EDIT_CATEGORY_SUCCESS,
    payload: {
        data,
        id
    }
})

export const editCategoryError = (error) => ({
    type: EDIT_CATEGORY_ERROR,
    payload: error
})


export const deleteCategoryStart = (id) => ({
    type: DELETE_CATEGORY_START,
    payload: id
})

export const deleteCategorySuccess = (id) => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: id
})

export const deleteCategoryError = (error) => ({
    type: DELETE_CATEGORY_ERROR,
    payload: error
})