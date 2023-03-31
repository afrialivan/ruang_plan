import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Product",
  initialState: {
    judul: "testing",
    price: "12321"
  },
  reducers: {
    update: (state, action) => {
      state.judul = action.payload.judul;
      state.price = action.payload.price;
    }
  }
})

// export const
export const { update } = slice.actions
export default slice.reducer