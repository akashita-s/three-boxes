import { createSlice } from "@reduxjs/toolkit";

const initialValue = { x1: "0", y1: "2", z1: "0", x2: "-1", y2: "1", z2: "0" };

export const inputSlice = createSlice({
  name: "input",
  initialState: { value: initialValue },
  reducers: {
    changeInput: (state, action) => {
      state.value.x1 = action.payload;
    },
    changeInputTwo: (state, action) => {
      state.value.y1 = action.payload;
    },
    changeInputThree: (state, action) => {
      state.value.z1 = action.payload;
    },
    changeInputFour: (state, action) => {
      state.value.x2 = action.payload;
    },
    changeInputFive: (state, action) => {
      state.value.y2 = action.payload;
    },
    changeInputSix: (state, action) => {
      state.value.z2 = action.payload;
    },
  },
});

export const {
  changeInput,
  changeInputTwo,
  changeInputThree,
  changeInputFour,
  changeInputFive,
  changeInputSix,
} = inputSlice.actions;

export default inputSlice.reducer;
