import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// step 1 : create createSlice() and write three thing
// 1. name
// 2. initialState
// 3. reducers isme functionality & defination set hoti hai and then export

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// createSlice 2 thing provide krta hn 1. reducer 2. action creator

// Action creators are generated for each case reducer function
// action creator me humre function ka behaviour store ho jata hn
export const { increment, decrement } = CounterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default CounterSlice.reducer;
