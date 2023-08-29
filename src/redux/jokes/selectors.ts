import { RootState } from "../store";

export const selectJokesData = (state: RootState) => state.jokes;