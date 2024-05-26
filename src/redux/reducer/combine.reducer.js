import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./category.reducer";

const combineReducer = () =>{
    return combineReducers({
        category: CategoryReducer
    })
} 
    
export default combineReducer;