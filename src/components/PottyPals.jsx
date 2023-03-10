import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import PottyEventCard from "./PottyEventCard"
// import CardGroup from "react-bootstrap/CardGroup"
import Accordion from 'react-bootstrap/Accordion'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function PottyPals(){
    const [events, setEvents] = useState([])
    const [name, setName] = useState("")
    const params =useParams()

let history = useHistory()

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
        <>
        <header style={{padding:'1rem', width:'100vw'}}><button onClick={(()=>history.push('/login'))}>Logout</button></header>
        <div style={{width:'100vw', display:'flex', justifyContent:'center', backgroundRepeat:'inherit'}}>
        <div style={{width:'50rem', height:'auto', display:'flex', justifyContent:'center', flexDirection:'column', alignItems: 'center', color:'black', backgroundColor:'rgba(119, 145, 126, 0.5)', padding:'10rem', borderRadius:'50%' }}>
            <h1>Hello, {name}!</h1>
            <h2 style={{color:'white'}}>Here are your kiddo's potty happenings while at care. </h2>
            <Accordion style={{width:'25rem'}}>
            {dateSort.map((event, index)=>(
            <PottyEventCard index={index.toString()} event={event}/>
            ))}
            </Accordion>
        </div>
        </div>
        <footer></footer>
        </>
    )
}

export default PottyPals