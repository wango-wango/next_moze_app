import { createSlice } from "@reduxjs/toolkit";

export interface DailyData {
  id: number;
  date: Date;
  icon: string;
  title: string;
  cost: number;
  accountType: string;
}

const initialState: DailyData[] = [];

const calendarSlice = createSlice({
  name: "accounts",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.push({
        id: new Date().getTime(),
        date: action.payload?.date ?? "",
        icon: action.payload?.icon ?? "",
        title: action.payload?.title ?? "",
        cost: action.payload?.cost ?? 0,
        accountType: action.payload?.accountType ?? "",
      });
    },
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload.id);
    },
    edit(state, action) {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          item = {
            ...item,
            date: action.payload?.date ?? "",
            icon: action.payload?.icon ?? "",
            title: action.payload?.title ?? "",
            cost: action.payload?.cost ?? 0,
            accountType: action.payload?.accountType ?? "",
          };
        }
        return item;
      });
    },
  },
});

export const { add, remove, edit } = calendarSlice.actions;
export default calendarSlice.reducer;
