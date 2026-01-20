
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => { state.push(action.payload); },
    removeProduct: (state, action) =>
      state.filter(p => p.id !== action.payload)
  }
});

export const { addProduct, removeProduct } = slice.actions;
export default slice.reducer;
