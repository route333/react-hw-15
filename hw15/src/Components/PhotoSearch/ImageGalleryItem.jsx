import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleImageClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <li className="gallery-item">
      <img style={{
            width: "200px",
          }} src={image.webformatURL} alt={image.tags} onClick={handleImageClick} />
    </li>
  );
};

export default ImageGalleryItem;