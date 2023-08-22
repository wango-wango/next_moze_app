import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducer/accountReducer";
import calendarReducer from "./reducer/calendarReducer";

export default configureStore({
  reducer: {
    accounts: accountReducer,
    calendar: calendarReducer,
  },
});
