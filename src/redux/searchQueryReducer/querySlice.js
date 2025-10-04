import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const querySlice = createSlice({
  name: "querySlice",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      return action.payload;
    },
  },
});

export default querySlice.reducer;

export const { setQuery } = querySlice.actions;
