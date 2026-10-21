import React, { useEffect, useState } from 'react'

const ImageSlider = () => {

  const [index, setIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  ];

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prevIndex) => (prevIndex + 1) % images.length);

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div>

      <h1>Image Slider</h1>

      <img
        src={images[index]}
        alt="img-here"
        style={{
          height: "200px",
          width: "300px",
          objectFit: "cover"
        }}
      />

    </div>
  )
}

export default ImageSlider