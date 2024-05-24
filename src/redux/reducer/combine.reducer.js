import { combineReducers } from "redux";
import CategoryReducer from "./category.reducer";

const combineReducer = () =>{
    return combineReducers({
        category: CategoryReducer
    })
} 
    
export default combineReducer;