import { createSlice } from "@reduxjs/toolkit";

interface AccountList {
  id: number;
  text: string;
}

const initialState: AccountList[] = [];

const accountSlice = createSlice({
  name: "accounts",
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
      });
    },
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload.id);
    },
    edit(state, action) {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text;
        }
        return item;
      });
    },
  },
});

export const { add, remove, edit } = accountSlice.actions;
export default accountSlice.reducer;
