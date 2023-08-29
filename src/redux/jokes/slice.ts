import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Jokes, JokesSliceState, Status } from "./types";
import { fetchJokes } from "./asyncActions";


const initialState: JokesSliceState = {
    items: [],
    status: Status.LOADING,
};

const jokesSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Jokes[]>) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJokes.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchJokes.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchJokes.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
});

export const { setItems } = jokesSlice.actions;

export default jokesSlice.reducer;