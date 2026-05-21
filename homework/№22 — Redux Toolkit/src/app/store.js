import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../favoritesSlice.js"; // Երկու կետով, որ դուրս գա src

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  }
});