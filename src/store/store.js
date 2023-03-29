import { configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productsSlice";

const reducer = combineReducers({
   productsSlice

});


const store = configureStore({
   reducer,

});
export default store;







