import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#f5f5f5',
        },
        primary: {
            main: '#333333',
        },
        secondary: {
            main: '#888888',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h6: {
            fontWeight: 600,
        },
    },
});

export default theme;
