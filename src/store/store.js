import { configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productsSlice";
import loaderSlice from "./modules/loaderSlice";
const reducer = combineReducers({
    productsSlice,
    loader: loaderSlice

});


const store = configureStore({
   reducer,

});
export default store;







