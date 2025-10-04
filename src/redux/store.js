import { configureStore } from "@reduxjs/toolkit";
import userGroupsReducer from "./userReducer/userGroupsSlice";
import popUpReducer from "./confirmPopUpReducer/confirmPopUpSlice";
import notificationReducer from "./notificationPopUpReducer/notificationPopUpSlice";
import queryReducer from "./searchQueryReducer/querySlice";

export const store = configureStore({
  reducer: {
    userGroups: userGroupsReducer,
    popUp: popUpReducer,
    notification: notificationReducer,
    query: queryReducer,
  },
});
