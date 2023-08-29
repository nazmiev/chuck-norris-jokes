import { configureStore } from "@reduxjs/toolkit";
import jokes from "./jokes/slice";
import filter from "./filter/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { filter, jokes },
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
