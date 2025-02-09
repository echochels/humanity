import React, { useState } from 'react';
import './Gallery.css';
import { Roll } from 'react-awesome-reveal';

const additionalImages = [
  { src: './a1.jpeg', title: 'Empowering Women' },
  { src: './a9.jpeg', title: 'Youth Empowerment' },
  { src: './a3.jpeg', title: 'Fishing Farming' },
  { src: './a4.jpeg', title: 'Empowering Youths' },
  { src: './a6.jpeg', title: 'Empowering Youths' },
];

const initialImages = [
  { src: './a7.jpeg', title: 'Youth Empowerment' },
  { src: './a2.jpeg', title: 'Empowering Women' },
  { src: './a10.jpeg', title: 'Skill Development' },
  { src: './a11.jpeg', title: 'Youth Empowerment' },
  { src: './a8.jpeg', title: 'Opened Borehole' },
  { src: './a12.jpeg', title: 'Catering' },
];

const Gallery = () => {
    const [images, setImages] = useState(initialImages);
    const [showMore, setShowMore] = useState(false);
  
    const handleViewMore = () => {
      if (showMore) {
        setImages(initialImages);
      } else {
        setImages(additionalImages);
      }
      setShowMore(!showMore);
    };
  
    return (
      <section className="gallery-section" id='gallery'>
                <div className="title">
                        <h2 style={{ color: "#1A1A1A" }}>SEE OUR IMPACT</h2>
                    </div>

        <div className="gallery-container">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.title} className="gallery-image" />

              <div className="card-body">
              <div className="card-title">{image.title}</div>
              
              </div>
            </div>
          ))}
        </div>
        <button className="view-more-button" onClick={handleViewMore}>
          {showMore ? 'View Less' : 'View More'}
        </button>
      </section>
    );
  };
  
  export default Gallery;