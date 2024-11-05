import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setImages} from '../store/gallerySlice';
import Card from '../components/Card';
import Filter from '../components/Filter';

function Gallery() {
    const images = useSelector(state => state.gallery);
    const dispatch = useDispatch();

    const handleFilterResults = (filteredImages) => {
        dispatch(setImages(filteredImages));
    };

    return (
        <div className="gallery">
            <Filter onFilterResults={handleFilterResults}/>
            <div className="image-grid">
                {images.map(image => (
                    <Card key={image.id} image={image}/>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
