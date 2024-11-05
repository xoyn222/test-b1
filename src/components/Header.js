import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material';

function Header() {
    return (
        <AppBar position="static" color="default" elevation={0} sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Typography variant="h6" color="primary">
                    NASA Gallery
                </Typography>

                <Box>
                    <Button component={RouterLink} to="/" color="primary" sx={{mx: 1}}>
                        Home
                    </Button>
                    <Button component={RouterLink} to="/gallery" color="primary" sx={{mx: 1}}>
                        Gallery
                    </Button>
                    <Button component={RouterLink} to="/favorites" color="primary" sx={{mx: 1}}>
                        Favorites
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
