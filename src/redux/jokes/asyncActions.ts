import { createAsyncThunk } from "@reduxjs/toolkit";
import { Jokes, JokesResponse, SearchJokesParams } from "./types";
import axios from "axios";

export const fetchJokes = createAsyncThunk<Jokes[], SearchJokesParams>(
    'jokes/fetchJokesStatus',
    async (params: SearchJokesParams) => {
        const { data } = await axios.get<JokesResponse>(
            `https://api.chucknorris.io/jokes/search`, {
            params: params
        });
        return data.result;
    }
)