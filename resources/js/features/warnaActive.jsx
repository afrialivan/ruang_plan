import { createSlice } from "@reduxjs/toolkit";

const warnaActive = createSlice({
  name: "Active",
  initialState: {
    warna: "mytheme"
  },
  reducers: {
    update: (state, action) => {
      state.warna = action.payload.warna
    }
  }
})

export const { update } = warnaActive.actions
export default warnaActive.reducer