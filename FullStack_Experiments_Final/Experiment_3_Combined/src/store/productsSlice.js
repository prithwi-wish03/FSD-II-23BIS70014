
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (s,a)=>{s.push(a.payload)}
  }
});

export const { addProduct } = slice.actions;
export default slice.reducer;
