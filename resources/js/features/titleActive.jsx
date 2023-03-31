import { createSlice } from "@reduxjs/toolkit";

const titleActive = createSlice({
  name: "Active",
  initialState: {
    title: ""
  },
  reducers: {
    update: (state, action) => {
      state.title = action.payload.title
    }
  }
})

export const { update } = titleActive.actions
export default titleActive.reducer