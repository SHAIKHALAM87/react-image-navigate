import { combineReducers } from "redux";
import {producer, selectedproducer} from './ProductReducer'

const reducer = combineReducers({
    allProducts:producer,
    selectedproducts:selectedproducer,
});

export default reducer;
