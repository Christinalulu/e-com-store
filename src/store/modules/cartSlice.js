import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
name: "cart",
initialState: {
   productsInCart: [],
   numberOfProductsInCart: 0
},

reducers:{
   ADD_PRODUCT_TO_CART: (state, action) => {
      console.log("action", action);
      state.productsInCart = [...state.productsInCart, action.payload]
      state.numberOfProductsInCart = state.productsInCart.length
   },
   REMOVE_PRODUCT_FROM_CART: (state, action)=> {
      console.log("state",state);
      console.log("action",action);
      state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload) 
      state.numberOfProductsInCart = state.productsInCart.length


   }
}
})

export default cartSlice.reducer
// Actions
const {ADD_PRODUCT_TO_CART} = cartSlice.actions;
export const addSingelProductToCart = (cartData) => (dispatch) => {
   console.log("cartData", cartData);
   dispatch(ADD_PRODUCT_TO_CART(cartData))
}
const {REMOVE_PRODUCT_FROM_CART} = cartSlice.actions;
export const removeIdFromCart  = (productId) => (dispatch) => {
   console.log("productId",productId);
   dispatch(REMOVE_PRODUCT_FROM_CART(productId))
}

