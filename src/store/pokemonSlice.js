import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../utils/apiCall.util";

export const getAllPokemon = createAsyncThunk(
  'getAllPokemon',
  async (thunkAPI) => {
    const response = await apiCall("https://pokeapi.co/api/v2/pokemon");
    return response.results;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    isPending: true,
    error: null,
  },
  reducers: {
    getPokemonByType: (state) => {
      state.value -= 1
    },
    getPokemonByGen: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getAllPokemon.fulfilled, (state, action) => {
      // Add user to the state array
      state.pokemons = action.payload;
    })
  },
});

export default pokemonSlice.reducer;