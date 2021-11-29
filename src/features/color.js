import { createSlice } from "@reduxjs/toolkit";

const initialValue = "black";

export const colorSlice = createSlice({
  name: "color",
  initialState: { value: initialValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
