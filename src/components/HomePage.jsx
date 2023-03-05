
import React, { useState, useEffect } from 'react'
import HomePageCard from "./HomePageCard"

function App() {
    const [displayImages, setDisplayImages] = useState([])
    
      useEffect(()=>{
          fetch('http://localhost:3000/kids')
          .then(response=>response.json())
          .then(data=>{
              setDisplayImages(data)
          })
      }, [])      
    return (
      <div className="App">
        {displayImages.map((images)=>(
          <HomePageCard 
            displayImages={images}
            key={images.id} 
            imageSrc={images.image}
            imageName={images.name}
          />
        ))}
        </div>
    )
  }
  export default HomePage;