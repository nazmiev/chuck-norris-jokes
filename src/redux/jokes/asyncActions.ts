import { createAsyncThunk } from "@reduxjs/toolkit";
import { Jokes, JokesResponse, SearchJokesParams } from "./types";
import axios from "axios";

export const fetchJokes = createAsyncThunk<Jokes[], SearchJokesParams>(
    'books/fetchBooksStatus',
    async (params) => {
        const { search } = params;
        // console.log('params: ', params);
        const { data } = await axios.get<JokesResponse>(
            `https://api.chucknorris.io/jokes/search`, {
            params: { query: search }
        });

        console.log('data: ', data);
        return data.result;
    }
)