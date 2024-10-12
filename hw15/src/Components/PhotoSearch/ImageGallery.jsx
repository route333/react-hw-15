import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="gallery"   style={{
        width: "700px",
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
        gap: "20px",
        listStyle: 'none',
      }}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;