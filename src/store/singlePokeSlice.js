import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../utils/apiCall.util";

export const getIndividualPokemon = createAsyncThunk(
  'getIndividualPokemon',
  async (pokeData, thunkAPI) => {
    let response;
    switch (pokeData.keyType) {
      case "url":
        response = await apiCall(pokeData.pokeKey);
        break;
      case "name":
        response = await apiCall(`https://pokeapi.co/api/v2/pokemon/${pokeData.pokeKey}`);
        break;
      default:
        return;
    }
    return response;
  }
);

export const singlePokeSlice = createSlice({
  name: "singlePoke",
  initialState: {
    individualPokemon: null,
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIndividualPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIndividualPokemon.fulfilled, (state, action) => {
        state.individualPokemon = action.payload;
        state.loading = false;
      })
      .addCase(getIndividualPokemon.rejected, (state, action) => {
        state.error = action.error.message || "An error occured";
        state.loading = false;
      })
  },
});

export default singlePokeSlice.reducer;