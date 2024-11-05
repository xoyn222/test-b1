import {createSlice} from '@reduxjs/toolkit';

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: [],
    reducers: {
        setImages: (state, action) => {
            return action.payload;
        },
        addImage: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const {setImages, addImage} = gallerySlice.actions;
export default gallerySlice.reducer;
