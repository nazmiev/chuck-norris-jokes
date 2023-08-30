import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Jokes, JokesSliceState, Status } from "./types";
import { fetchJokes } from "./asyncActions";


const initialState: JokesSliceState = {
    items: [],
    status: Status.SUCCESS,
};

const jokesSlice = createSlice({
    name: "jokes",
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
            state.status = Status.SUCCESS;
            state.items = action.payload;
        });
        builder.addCase(fetchJokes.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
});

export const { setItems } = jokesSlice.actions;

export default jokesSlice.reducer;