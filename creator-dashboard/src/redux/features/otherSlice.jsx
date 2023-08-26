import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionStatus: "all",
};

export const otherSlice = createSlice({
  name: "otherFeatures",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.questionStatus = action.payload;
    },
  },
});

export const { setStatus } = otherSlice.actions;
export default otherSlice.reducer;
