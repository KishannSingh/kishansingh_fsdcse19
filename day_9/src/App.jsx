import React, { useState } from 'react'

const App = () => {
  const images = [
    'https://i.pinimg.com/736x/60/db/bf/60dbbfd4a8a48e61142caa31e23f622e.jpg',
    'https://wallpapercave.com/wp/ENozMYj.jpg',
    'https://img.magnific.com/premium-photo/nightfall-pictures-download-nightfall-landscape-nature-desktop-wallpaper_636537-10785.jpg'
  ]

  const [index, setInd] = useState(0)

  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Image Slider
      </h1>

      <img
        src={images[index]}
        alt="img-here"
        style={{ height: "200px", width: "200px" }}
      />

      <br />

      <button
        onClick={() =>
          setInd((index - 1 + images.length) % images.length)
        }
      >
        Left
      </button>

      <button
        onClick={() =>
          setInd((index + 1) % images.length)
        }
      >
        Right
      </button>
    </div>
  )
}

export default App