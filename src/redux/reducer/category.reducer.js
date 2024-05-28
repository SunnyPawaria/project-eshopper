import { ADD_CATEGORY_SUCCESS, GET_CATEGORY_SUCCESS } from "../constant/category.constant";

const initialState = {
    categories: localStorage.getItem('category') ? JSON.parse(localStorage.getItem('category')) : []
}

let d = [];

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_CATEGORY_SUCCESS: 
            d = [...action.payload];

            localStorage.setItem('category', JSON.stringify(d))

            return {
                ...state,
                categories: d
            }

        case ADD_CATEGORY_SUCCESS:
            d = [...state.categories, action.payload];

            localStorage.setItem('category', JSON.stringify(d))

            return {
                ...state,
                categories: d
            }
    
        default:
            return state
    }
}

export default CategoryReducer;