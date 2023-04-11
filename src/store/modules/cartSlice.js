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


