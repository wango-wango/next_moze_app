import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducer/accountReducer";

export default configureStore({
  reducer: {
    accounts: accountReducer,
  },
});
