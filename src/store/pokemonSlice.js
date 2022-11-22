import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../utils/apiCall.util";

export const getAllPokemon = createAsyncThunk(
  'getAllPokemon',
  async (url = `https://pokeapi.co/api/v2/pokemon/?limit=18`, thunkAPI) => {
    const response = await apiCall(url);
    return response;
  }
);
export const getPokemonByType = createAsyncThunk(
  'getPokemonByType',
  async (type, thunkAPI) => {
    const response = await apiCall(`https://pokeapi.co/api/v2/type/${type}`);
    return response;
  }
);
export const getPokemonByGen = createAsyncThunk(
  'getPokemonByGen',
  async (genNumber, thunkAPI) => {
    const response = await apiCall(`https://pokeapi.co/api/v2/generation/${genNumber}`);
    return response;
  }
);
export const getIndividualPokemon = createAsyncThunk(
  'getIndividualPokemon',
  async (pokeName, thunkAPI) => {
    const response = await apiCall(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    return response;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    individualPokemon: null,
    pokemonsByType: [],
    pokemons: [],
    pagination: {
      prev: null,
      next: null,
    },
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPokemon.fulfilled, (state, action) => {
        state.pokemons = action.payload.results;
        state.pagination = { prev: action.payload.previous, next: action.payload.next };
        state.loading = false;
      })

      .addCase(getPokemonByType.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemonByType.fulfilled, (state, action) => {
        state.pokemonsByType = action.payload.pokemon;
        state.loading = false;
      })

      .addCase(getPokemonByGen.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemonByGen.fulfilled, (state, action) => {
        state.pokemons = action.payload.pokemon_species;
        state.loading = false;
      })
      
      .addCase(getIndividualPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIndividualPokemon.fulfilled, (state, action) => {
        state.individualPokemon = action.payload;
        state.loading = false;
      })
  },
});

export default pokemonSlice.reducer;