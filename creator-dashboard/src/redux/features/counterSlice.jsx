import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    addAmount: (state, action) => {
      state.value += action.payload;
    },
    resetCount: (state) => {
      state.value = 0;
    },
  },
});

export const {increment, decrement, addAmount, resetCount} = counterSlice.actions;
export default counterSlice.reducer