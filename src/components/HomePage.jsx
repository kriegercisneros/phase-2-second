
import React, { useState, useEffect } from 'react'
import HomePageCard from "./HomePageCard"

function HomePage() {
    const [data, setdata] = useState([])
    
      useEffect(()=>{
          fetch('http://localhost:3000/kids')
          .then(response=>response.json())
          .then(data=>{
              setdata(data)
          })
      }, [])      
    return (
      <div className="App">
        {data.map((childData)=>(
          <HomePageCard 
            data={childData}
            key={childData.id} 
            imageSrc={childData.image}
            imageName={childData.name}
          />
        ))}
        </div>
    )
  }
  export default HomePage;