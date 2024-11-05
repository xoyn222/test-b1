import {createSlice} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
    date: dayjs().format('YYYY-MM-DD'),
    keyword: '',
    mediaType: 'all',
    loading: false,
    error: null,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setDate(state, action) {
            state.date = action.payload;
        },
        setKeyword(state, action) {
            state.keyword = action.payload;
        },
        setMediaType(state, action) {
            state.mediaType = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        resetFilter(state) {
            state.date = initialState.date;
            state.keyword = '';
            state.mediaType = 'all';
            state.loading = false;
            state.error = null;
        },
    },
});

export const {setDate, setKeyword, setMediaType, setLoading, setError, resetFilter} = filterSlice.actions;

export default filterSlice.reducer;
