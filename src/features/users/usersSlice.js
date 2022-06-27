import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John Michaelson" },
  { id: "1", name: "Tim Burton" },
  { id: "2", name: "Haruki Murakami" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
