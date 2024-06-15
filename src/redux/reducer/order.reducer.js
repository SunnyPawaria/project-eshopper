import { GET_ORDER_SUCCESS } from "../constant/order.constant";

const initialState = {
    orders: []
}

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                orders:[...action.payload]
            }
        default:
            return state
    }
}

export default OrderReducer;