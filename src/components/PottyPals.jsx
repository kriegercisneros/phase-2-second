import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PottyEventCard from "./PottyEventCard"

function PottyPals({}){
    const [events, setEvents] = useState([])
    const params =useParams()
    console.log(params.id)

    useEffect(()=>{
        fetch(`http://localhost:3000/kids/${params.id}`)
        .then(response=>response.json())
        .then(data=>setEvents(data.events))
    }, [params])
    return (
        /* fetches events based on current params of url; now i need to redirect to this page
        based on click in HomePageCard */
        <div>
            {events.map((event)=>{
                return <PottyEventCard 
                    event={event}
                />
                    // id= "1"
                    // date="3 March, 2023"
                    // time = "8:23 am"
                    // eventType = "Made It!" 
                    // pottyType= "1"
                    // followUp = {
                    //     madeIt="[true, false, true]" 
                    //     accident="null"
                    // }
                    // notes="Walked from playground to inside all by himself!"
            })}
        </div>
    )
}

export default PottyPals