import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentContactId: null, active: false };

const popUpSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    activeConfirmPopUp: (state, action) => {
      return { ...state, confirmedFunction: action.payload, active: true };
    },
    deactiveConfirmPopUp: (state, action) => {
      return { ...state, active: false };
    },
    setCurrentId: (state, action) => {
      return { ...state, currentContactId: action.payload };
    },
  },
});

export default popUpSlice.reducer;

export const { activeConfirmPopUp, deactiveConfirmPopUp, setCurrentId } =
  popUpSlice.actions;
