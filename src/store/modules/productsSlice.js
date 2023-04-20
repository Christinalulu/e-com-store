import { createSlice } from "@reduxjs/toolkit";
import { setLoadingState } from "./loaderSlice";
import { setError } from "./errorSlice";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
    productDetails: null,
    isError: false,
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.product = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      state.productDetails = action.payload;
    },
    SET_ERROR: (state, action) => {
      state.isError = action.payload;
    },
  },
});
export default productsSlice.reducer;

const { SET_PRODUCTS } = productsSlice.actions;
export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoadingState(true));
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/online-shop");
    const data = await response.json();
    dispatch(SET_PRODUCTS(data));
    dispatch(setLoadingState(false));
  } catch (e) {
    dispatch(setLoadingState(false));
    dispatch(setError(true, e.message));
    return console.error(e);
  }
};

const { SET_SINGLE_PRODUCT } = productsSlice.actions;
export const fetchSingleProductById = (id) => async (dispatch) => {
  dispatch(setLoadingState(true));
  let response;
  try {
    const response = await fetch(
      `https://api.noroff.dev/api/v1/online-shop/${id}`
    );
    const productDetailsData = await response.json();
    dispatch(SET_SINGLE_PRODUCT(productDetailsData));
    dispatch(setLoadingState(false));
  } catch (e) {
    return console.error(e);
  }
  if (response.ok) {
    dispatch(handlerErrorResponse(false));
  } else {
    dispatch(handlerErrorResponse(true));
  }
};

const { SET_ERROR } = productsSlice.reducer;
export const handlerErrorResponse = (ApiResponseStatus) => (dispatch) => {
  dispatch(SET_ERROR(ApiResponseStatus));
};
