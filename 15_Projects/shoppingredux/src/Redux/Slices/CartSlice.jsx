import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: () => {},
    remove: () => {},
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
