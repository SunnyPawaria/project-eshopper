import { ADD_USER_SUCCESS, GET_USER_SUCCESS } from "../constant/user.constant";

const initialState = {
    users: []
}

let d = [];

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER_SUCCESS: 
          
            return {
                ...state,
                users: [...action.payload]
            }

        case ADD_USER_SUCCESS:

            return {
                ...state,
                products:[...state.products, action.payload]
            }
    
        default:
            return state
    }
}

export default UserReducer;