import { configureStore } from '@reduxjs/toolkit';
import pokeListReducer from './pokeListSlice';
import typesReducer from './typesSlice';
import gensReducer from './generationsSlice';
import singlePokeReducer from './singlePokeSlice';

export default configureStore({
  reducer: {
    pokeList: pokeListReducer,
    singlePoke: singlePokeReducer,
    types: typesReducer,
    generations: gensReducer,
  },
})