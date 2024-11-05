import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../components/Card';
import {Typography} from "@mui/material";

function Favorites() {
    const favorites = useSelector((state) => state.favorites);

    return (
        <div>
            <Typography variant="h4" color="primary" align="center">Your Favorites</Typography>
            {favorites.length === 0 ? (
                <Typography variant="body1" align="center" sx={{mt: 2}}>You have no favorite images.</Typography>
            ) : (
                <div>
                    {favorites.map((image) => (
                        <Card key={image.url} image={image}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
