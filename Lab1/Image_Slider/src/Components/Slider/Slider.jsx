import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css"; // Import the CSS file

export default function Slider() {
  const imageArray = [
    "./assets/firstimg.jpg",
    "./assets/secondimg.jpg",
    "./assets/thirdimg.jpg",
    "./assets/fourthimg.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideshowInterval, setSlideshowInterval] = useState(null);

  const prevImage = () => {
    setCurrentIndex((index) =>
      index === 0 ? imageArray.length - 1 : index - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((index) =>
      index === imageArray.length - 1 ? 0 : index + 1
    );
  };

  const slideShow = () => {
    if (!slideshowInterval) {
      const interval = setInterval(() => {
        nextImage();
      }, 2000);
      setSlideshowInterval(interval);
    }
  };

  const stop = () => {
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
      setSlideshowInterval(null);
    }
  };

  useEffect(() => {
    return () => {
      if (slideshowInterval) {
        clearInterval(slideshowInterval);
      }
    };
  }, [slideshowInterval]);

  return (
    <div className="container mt-5 ">
      <h1 className="text-center mb-4">Image Slider</h1>
      <div className="image-container text-center">
        <div>
          <img
            src={imageArray[currentIndex]}
            alt="slider"
            className="img-fluid rounded"
          />
        </div>
        <div className="mt-3 d-flex justify-content-between ">
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={prevImage}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={nextImage}
          >
            Next
          </button>
          <button
            type="button"
            className="btn btn-success mr-2"
            onClick={slideShow}
          >
            Start Slideshow
          </button>
          <button type="button" className="btn btn-danger" onClick={stop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}
