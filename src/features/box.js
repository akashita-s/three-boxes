import { createSlice } from "@reduxjs/toolkit";

const initialValue = "Box 2";

export const boxSlice = createSlice({
  name: "box",
  initialState: { value: initialValue },
  reducers: {
    changeBox: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { changeBox } = boxSlice.actions;

export default boxSlice.reducer;