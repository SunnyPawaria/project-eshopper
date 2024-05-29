import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./category.reducer";
import {reducer as toastrReducer} from 'react-redux-toastr'

const combineReducer = () =>{
    return combineReducers({
        category: CategoryReducer,
        toastr: toastrReducer
    })
} 
    
export default combineReducer;