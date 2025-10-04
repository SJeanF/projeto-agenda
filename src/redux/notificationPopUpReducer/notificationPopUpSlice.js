import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  active: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    activateNotification: (state, action) => {
      return { ...state, message: action.payload, active: true };
    },
    deactiveNotification: (state, action) => {
      return { ...state, active: false };
    },
  },
});

export default notificationSlice.reducer;

export const { activateNotification, deactiveNotification } =
  notificationSlice.actions;
