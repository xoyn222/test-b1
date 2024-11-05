import axios from 'axios';

const API_KEY = 'DaKAj5GciOawmbUcqeKYEVbuapmJWMx0wjbIWnXa';
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchImagesByDateRange = async (startDate, endDate) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                start_date: startDate,
                end_date: endDate,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching images by date range:", error);
        throw error;
    }
};
