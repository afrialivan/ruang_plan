import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/slice'
import warnaReducer from "./features/warnaActive";

export const store = configureStore({
  reducer: {
    product: productReducer,
    warna: warnaReducer
  }
})