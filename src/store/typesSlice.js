import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../utils/apiCall.util";

export const getTypes = createAsyncThunk(
  'getTypes',
  async (thunkAPI) => {
    const response = await apiCall(`https://pokeapi.co/api/v2/type`);
    return response;
  }
);

export const typesSlice = createSlice({
  name: "types",
  initialState: {
    typesData: [],
    loading: true,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTypes.fulfilled, (state, action) => {
        state.typesData = action.payload.results;
        state.loading = false;
      })
      .addCase(getTypes.rejected, (state, action) => {
        state.error = action.error.message || "An error occured";
        state.loading = false;
      })
  },
});

export default typesSlice.reducer;