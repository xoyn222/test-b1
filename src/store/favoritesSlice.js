import {createSlice} from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            const exists = state.find((item) => item.url === action.payload.url);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            return state.filter((item) => item.url !== action.payload.url);
        }
    }
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
