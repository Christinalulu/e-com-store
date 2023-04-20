import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
   name: "error",
   initialState: {
      isError: false,
      errorMessage: "No Products"
   },
   reducers: {
      SET_ERROR: (state, action) => {
         state.isError = action.payload
      },
      SET_ERROR_MESSAGE: (state, action) => {
         state.errorMessage = action.payload
      }
   }
})

export default errorSlice.reducer;

const {SET_ERROR} = errorSlice.actions
const {SET_ERROR_MESSAGE} = errorSlice.actions

export const setError = (noProduct, errorMessage) => (dispatch) => {
dispatch(SET_ERROR(noProduct));
dispatch(SET_ERROR_MESSAGE(errorMessage));
}