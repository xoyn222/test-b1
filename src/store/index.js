import {configureStore} from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import favoritesReducer from './favoritesSlice';
import gallerySlice from "./gallerySlice";

const store = configureStore({
    reducer: {
        filter: filterReducer,
        favorites: favoritesReducer,
        gallery: gallerySlice,
    },
});

export default store;
