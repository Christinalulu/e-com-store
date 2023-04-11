import { configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productsSlice";
import loaderSlice from "./modules/loaderSlice";
import cartSlice from "./modules/cartSlice";



const reducer = combineReducers({
    productsSlice,
    loader: loaderSlice,
    cart: cartSlice
  
});

const store = configureStore({
   reducer,
});
export default store;

