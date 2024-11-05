import React from 'react';
import {Container, Box} from '@mui/material';

const Layout = ({children}) => (
    <>
        <Container maxWidth="sm" sx={{mt: 4}}>
            <Box sx={{bgcolor: 'background.default', p: 2, borderRadius: 1}}>
                {children}
            </Box>
        </Container>
    </>
);

export default Layout;
