import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userGroups = createSlice({
  name: "Groups",
  initialState,
  reducers: {
    setNewEditableUserGroups: (state, action) => {
      return action.payload;
    },
    addNewGroup: (state, action) => {
      state.push(action.payload);
    },
    removeGroup: (state, action) => {
      return state.filter((group) => group._id !== action.payload._id);
    },
  },
});

export default userGroups.reducer;

export const { setNewEditableUserGroups, addNewGroup, removeGroup } =
  userGroups.actions;
