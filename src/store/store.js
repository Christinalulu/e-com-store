import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productsSlice";
import loaderSlice from "./modules/loaderSlice";
import cartSlice from "./modules/cartSlice";
import errorSlice from "./modules/errorSlice"
 
const reducer = combineReducers({
  productsSlice,
  loader: loaderSlice,
  cart: cartSlice,
  error: errorSlice,
});

const store = configureStore({
  reducer,
});
export default store;
