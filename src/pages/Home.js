import React from 'react';
import Layout from '../components/Layout';
import {Typography} from '@mui/material';

const Home = () => (
    <Layout>
        <Typography variant="h4" color="primary" align="center">
            Welcome to NASA Gallery
        </Typography>
        <Typography variant="body1" align="center" sx={{mt: 2}}>
            Explore the wonders of the universe through NASA's images
        </Typography>
    </Layout>
);

export default Home;
