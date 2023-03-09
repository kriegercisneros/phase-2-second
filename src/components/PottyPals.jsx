import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PottyEventCard from "./PottyEventCard"
// import CardGroup from "react-bootstrap/CardGroup"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function PottyPals({}){
    const [events, setEvents] = useState([])
    const [name, setName] = useState("")
    const params =useParams()

    useEffect(()=>{
        fetch(`http://localhost:3000/kids/${params.id}`)
        .then(response=>response.json())
        .then(data=>setEvents(data.events))
    }, [params])

    useEffect(()=>{
        fetch(`http://localhost:3000/users/${params.id}`)
        .then(response=>response.json())
        .then(data=>setName(data.name))
    },[])

    let dateSort = events.sort(function(a, b){
        const dateA= new Date(a.date)
        const dateB= new Date(b.date)
        if(dateA>dateB) return 1;
        else if(dateA<dateB) return -1;
        else return 0;
    })

    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems: 'center'}}>
            <h1>Hello, {name}</h1>
            {dateSort.map((event)=>(<PottyEventCard event={event}/>))}
        </div>
    )
}

export default PottyPals