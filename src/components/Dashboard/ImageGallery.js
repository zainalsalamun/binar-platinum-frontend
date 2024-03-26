import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="image-gallery">
      <h1>Image Gallery</h1>
      <div className="images">
        {images.map(image => (
          <div key={image.id} className="image">
            <img src={image.thumbnailUrl} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
