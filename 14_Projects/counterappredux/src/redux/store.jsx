import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

// its is centralized store. its create by multiple slices
// CounterSlice is a particular slice

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});

// How to add redux code and react using 3 step
// 1st export store file
// 2nd wrapped <Provider> <App/> </Provider>
// 3rd passed store in Provider component as a props
