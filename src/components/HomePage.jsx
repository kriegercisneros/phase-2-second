
import React, { useState, useEffect } from 'react'
import HomePageCard from "./HomePageCard"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import backImage from '../assets/images/backImage.jpg'

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
      <>
      <header style={{backgroundColor:'rgb(119, 200, 126)', height:'3rem'}}>This is a saucy header.</header>
      <div className="App" style={{backgroundImage:`url(${backImage})`, display:'flex', width:'100vw', height:'100vh', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{textAlign:'center', color:'black', backgroundColor:'rgba(119, 145, 126, 0.5', width:'100vw', height:'100vh', paddingTop:'2rem', marginBottom:'1rem'}}>
        <h1>Hello, Provider!</h1>
        <h2>Here are the kiddos you are training today:</h2>
        </div>
        
        <Row xs={1} md={2} lg={4} className="g-4">
        {data.map((childData)=>(
          <Col><HomePageCard 
            data={childData}
            key={childData.id} 
            imageSrc={childData.image}
            imageName={childData.name}
          /></Col>
        ))}
        </Row>
        <footer style={{backgroundColor:'rgb(119, 145, 126)', height:'auto', width:'100vw', padding:'3rem', bottomMargin:'10px'}}>This is a not saucy footer.</footer>
        </div>
        </>
    )
  }
  export default HomePage;