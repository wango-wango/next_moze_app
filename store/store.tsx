import { configureStore } from "@reduxjs/toolkit";
import accountReducer, { AccountList } from "./reducer/accountReducer";
import calendarReducer, { DailyData } from "./reducer/calendarReducer";

export interface Reducer {
  accounts: AccountList[];
  calendar: DailyData[];
}
export default configureStore({
  reducer: {
    accounts: accountReducer,
    calendar: calendarReducer,
  },
});
