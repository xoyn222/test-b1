import React from 'react';
import dayjs from 'dayjs';
import {useSelector, useDispatch} from 'react-redux';
import {fetchImagesByDateRange} from '../api';
import {setDate, setKeyword, setMediaType, setLoading, setError} from '../store/filterSlice';
import {Box, Button, TextField, Select, MenuItem, FormControl, InputLabel, CircularProgress} from '@mui/material';

function Filter({onFilterResults}) {
    const dispatch = useDispatch();
    const {date, keyword, mediaType, loading, error} = useSelector((state) => state.filter);

    const handleFilterApply = async () => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const end = dayjs(date);
            const start = end.subtract(100, 'day');
            const formattedStart = start.format('YYYY-MM-DD');
            const formattedEnd = end.format('YYYY-MM-DD');

            let data = await fetchImagesByDateRange(formattedStart, formattedEnd);

            if (keyword) {
                const lowerKeyword = keyword.toLowerCase();
                data = data.filter(item =>
                    (item.title && item.title.toLowerCase().includes(lowerKeyword)) ||
                    (item.description && item.description.toLowerCase().includes(lowerKeyword))
                );
            }

            if (mediaType !== 'all') {
                data = data.filter(item => item.media_type === mediaType);
            }

            data.sort((a, b) => new Date(b.date) - new Date(a.date));

            onFilterResults(data);
        } catch (error) {
            dispatch(setError('Error fetching images. Please try again later.'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400, m: '0 auto'}}>
            <TextField
                label="Keyword"
                value={keyword}
                onChange={(e) => dispatch(setKeyword(e.target.value))}
                variant="outlined"
                fullWidth
            />
            <TextField
                label="Date"
                type="date"
                value={date}
                onChange={(e) => dispatch(setDate(e.target.value))}
                variant="outlined"
                fullWidth
            />
            <FormControl fullWidth>
                <InputLabel>Media Type</InputLabel>
                <Select
                    value={mediaType}
                    onChange={(e) => dispatch(setMediaType(e.target.value))}
                    label="Media Type"
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="image">Image</MenuItem>
                    <MenuItem value="video">Video</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                onClick={handleFilterApply}
                disabled={loading}
                fullWidth
            >
                {loading ? <CircularProgress size={24}/> : 'Apply Filters'}
            </Button>
            {error && <Box sx={{color: 'error.main'}}>{error}</Box>}
        </Box>
    );
}

export default Filter;