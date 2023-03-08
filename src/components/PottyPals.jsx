import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PottyEventCard from "./PottyEventCard"
// import CardGroup from "react-bootstrap/CardGroup"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

function PottyPals({}){
    const [events, setEvents] = useState([])
    const params =useParams()

    useEffect(()=>{
        fetch(`http://localhost:3000/kids/${params.id}`)
        .then(response=>response.json())
        .then(data=>setEvents(data.events))
    }, [params])
    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {events.map((event)=>{
                return <Col>
                    <PottyEventCard event={event}/>
                </Col>
            })}
        </Row>
    )
}

export default PottyPals