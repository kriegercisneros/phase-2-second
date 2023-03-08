
import React, { useState, useEffect } from 'react'
import HomePageCard from "./HomePageCard"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

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
      <div className="App" >
        <Row xs={1} md={2} lg={4} className="g-4">
        {data.map((childData)=>(
          <Col><HomePageCard 
            data={childData}
            key={childData.id} 
            imageSrc={childData.image}
            imageName={childData.name}
          /></Col>
        ))}</Row>
        </div>
    )
  }
  export default HomePage;