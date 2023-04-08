import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
    productDetails: null,
    isError: false
  },

  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.product = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});
export default productsSlice.reducer;

// Calling All Products
const { SET_PRODUCTS } = productsSlice.actions;
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/online-shop");
    const data = await response.json();
    console.log(data);

    dispatch(SET_PRODUCTS(data));
  } catch (e) {
    return console.error(e);
  }
};

// Calling One Product by ID
const {SET_SINGLE_PRODUCT} = productsSlice.actions;

export const fetchSingleProductById = (id) => async (dispatch) => {
  try {
   const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
   const productDetailsData = await response.json();
   dispatch(SET_SINGLE_PRODUCT(productDetailsData))


  } catch(e) {
   console.log("Error sad :(", e.message);
  }
};
