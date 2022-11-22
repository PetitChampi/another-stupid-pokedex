import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../utils/apiCall.util";

export const getGens = createAsyncThunk(
  'getGens',
  async (thunkAPI) => {
    const response = await apiCall(`https://pokeapi.co/api/v2/generation`);
    return response;
  }
);

export const generationsSlice = createSlice({
  name: "generations",
  initialState: {
    gensData: [],
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGens.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGens.fulfilled, (state, action) => {
        state.gensData = action.payload.results;
        state.loading = false;
      })
      .addCase(getGens.rejected, (state, action) => {
        state.error = action.error.message || "An error occured";
        state.loading = false;
      })
  },
});

export default generationsSlice.reducer;