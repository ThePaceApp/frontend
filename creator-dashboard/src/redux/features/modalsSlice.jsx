import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addQuestion: false,
  addSubject: false,
  editQuestion: false,
  snackBar: {
    open: false,
    message: "",
    severity: "success",
  },
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    addQuestion: (state) => {
      state.addQuestion = !state.addQuestion;
    },
    addSubject: (state) => {
      state.addSubject = !state.addSubject;
    },
    editQuestion: (state) => {
      state.editQuestion = !state.editQuestion;
    },
    toggleSnackBar: (state, action) => {
      state.snackBar.message = action.payload.message;
      state.snackBar.open = action.payload.open;
      state.snackBar.severity = action.payload.severity;
    },
  },
});

export const { addSubject, addQuestion, editQuestion, toggleSnackBar } = modalsSlice.actions;
export default modalsSlice.reducer;
