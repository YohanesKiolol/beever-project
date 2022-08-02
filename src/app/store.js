import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favorites";
import myQuotesReducer from "../reducers/myQuotes";

//crete redux store
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    myQuotes: myQuotesReducer,
  },
});
