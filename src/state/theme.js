import { createSlice } from "@reduxjs/toolkit";

const intialTheme = "";

export const userTheme = createSlice({
  name: "theme",
  initialState: { value: intialTheme },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = userTheme.actions;
export default userTheme.reducer;
