import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../utils/apiCall.util";

export const getAllPokemon = createAsyncThunk(
  'getAllPokemon',
  async (url = `https://pokeapi.co/api/v2/pokemon/?limit=18`, thunkAPI) => {
    const response = await apiCall(url);
    return response;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    pagination: {
      prev: null,
      next: null,
    },
    isPending: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPokemon.fulfilled, (state, action) => {
      state.pokemons = action.payload.results;
      state.pagination = { prev: action.payload.previous, next: action.payload.next };
    })
  },
});

export default pokemonSlice.reducer;