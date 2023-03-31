import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/slice'
import titleReducer from "./features/titleActive";

export const store = configureStore({
  reducer: {
    product: productReducer,
    title: titleReducer
  }
})