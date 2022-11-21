import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import typesReducer from './typesSlice';
import gensReducer from './generationsSlice';

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
    types: typesReducer,
    generations: gensReducer,
  },
})