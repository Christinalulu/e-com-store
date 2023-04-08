import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
name: ' loader',
initialState : {
   isLoading: false
}
})

export default loaderSlice.reducer;