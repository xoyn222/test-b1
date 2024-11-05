import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../store/favoritesSlice';
import {
    Card as MUICard,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';

function Card({image}) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const [isModalOpen, setModalOpen] = useState(false);

    const isFavorite = favorites.some((fav) => fav.url === image.url);
    const formattedDate = new Date(image.date).toLocaleDateString('en-GB');

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavorite(image));
        } else {
            setModalOpen(true);
        }
    };

    const confirmAddFavorite = () => {
        dispatch(addFavorite(image));
        setModalOpen(false);
    };

    return (
        <MUICard
            sx={{
                maxWidth: 1000,
                margin: 'auto',
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
            }}
        >
            {image.media_type === 'image' ? (
                <CardMedia
                    component="img"
                    height="500"
                    image={image.url}
                    alt={image.title}
                />
            ) : image.media_type === 'video' ? (
                <CardMedia
                    component="iframe"
                    height="500"
                    src={image.url}
                    title={image.title}
                />
            ) : null}

            <CardContent>
                <Typography variant="h6" color="primary" align="center">
                    {image.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center" sx={{mt: 1}}>
                    {image.explanation}
                </Typography>
                <Typography variant="caption" color="textSecondary" align="center" sx={{display: 'block', mt: 1}}>
                    {formattedDate}
                </Typography>
            </CardContent>

            <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleFavoriteToggle}
                sx={{mt: 1}}
            >
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </Button>

            <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
                <DialogTitle>Confirm Add to Favorites</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to add this item to your favorites?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmAddFavorite} color="primary">
                        Yes, Add to Favorites
                    </Button>
                    <Button onClick={() => setModalOpen(false)} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </MUICard>
    );
}

export default Card;