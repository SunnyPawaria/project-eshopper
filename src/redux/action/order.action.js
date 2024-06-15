import { GET_ORDER_ERROR, GET_ORDER_START, GET_ORDER_SUCCESS, PLACE_ORDER_ERROR, PLACE_ORDER_START, PLACE_ORDER_SUCCESS } from "../constant/order.constant"

export const getOrderStart = () => ({
    type: GET_ORDER_START
})

export const getOrderSuccess = (data) => ({
    type: GET_ORDER_SUCCESS,
    payload: data
})

export const getOrderError = (error) => ({
    type: GET_ORDER_ERROR,
    payload: error
})

export const placeOrderStart = (data) => ({
    type: PLACE_ORDER_START,
    payload: data
})

export const placeOrderSuccess = (data) => ({
    type: PLACE_ORDER_SUCCESS,
    payload: data
})

export const placeOrderError = (error) => ({
    type: PLACE_ORDER_ERROR,
    payload: error
})
