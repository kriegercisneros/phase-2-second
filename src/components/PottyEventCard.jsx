import React from "react"
import Card from 'react-bootstrap/Card'
import { IconContext } from 'react-icons/'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faToilet } from "@fortawesome/free-solid-svg-icons";



function PottyEventCard({event}){
    console.log(event)
    return(

<div >
<FontAwesomeIcon icon={faUserSecret}/>


        <Card border="warning">
            <Card.Header>{event.date}</Card.Header>         
                {event.followUp.madeIt ? (<Card.Img style={{width:'17rem'}}variant="top" src="https://as1.ftcdn.net/v2/jpg/04/01/31/82/1000_F_401318285_8t5nMxBTJ0Y9By3VHPnTKghO7V9AyM7x.jpg"/>):
                (<Card.Img style={{width:'13rem'}}variant="top" src="https://img.myloview.com/posters/sad-cute-little-kid-cry-and-wear-jacket-in-winter-season-child-scream-crying-wearing-warm-clothes-400-232608021.jpg"/>)}
                    <Card.Body>
                        <div style={{'text-align':'center'}}>
                            <Card.Title>{event.eventType}</Card.Title>
                        </div>
                <div>      
                    {event.followUp.madeIt ? (<div id ="madeItFollowUp">
                        <Card.Title>Follow Up</Card.Title>
                        {event.followUp.madeIt[0]? <Card.Subtitle><i class="fa-regular fa-square-check"></i> Flushed </Card.Subtitle> : <Card.Subtitle><i class="fa-solid fa-circle-xmark"></i> Flushed </Card.Subtitle>}                   
                        {event.followUp.madeIt[1]? <Card.Subtitle><i class="fa-regular fa-square-check"></i> Washed Hands </Card.Subtitle>: <Card.Subtitle><i class="fa-solid fa-circle-xmark"></i> Washed Hands </Card.Subtitle>}                    
                        {event.followUp.madeIt[2]? <Card.Subtitle><i class="fa-regular fa-square-check"></i> Notified Provider </Card.Subtitle> : <Card.Subtitle><i class="fa-solid fa-circle-xmark"></i> Notified Provider </Card.Subtitle>}
                    </div>): null }
                    {event.followUp.accident ? (<div id ="accidentFollowUp">
                        <Card.Title>Follow Up</Card.Title>                   
                        {event.followUp.accident[0]? <Card.Subtitle><i class="fa-regular fa-square-check"></i> Almost Made It</Card.Subtitle> : <Card.Subtitle><i class="fa-solid fa-circle-xmark"></i> Almost Made It </Card.Subtitle> }                 
                        {event.followUp.accident[1]? <Card.Subtitle><i class="fa-regular fa-square-check"></i> Notified Provider </Card.Subtitle> : <Card.Subtitle><i class="fa-solid fa-circle-xmark"> Notified Provider </i></Card.Subtitle>}
                    </div>) : null}<br></br>
                    <div style={{float:'right'}}>
                    {event.pottyType==='#1' ? (<i className="fa-solid fa-toilet fa-5x" style={{color:'#FFEB33'}}></i>): (<i className="fa-solid fa-toilet fa-5x" style={{color:'#4F351C'}}></i>)}
                        {/* <Card.Subtitle>{event.pottyType}</Card.Subtitle> */}
                    </div>
                </div>  
                    </Card.Body>
                <Card.Footer>
                    <Card.Text className="text-muted">Notes:</Card.Text>
                    <small>{event.notes}</small>
                </Card.Footer> 
        </Card>
        </div>
    );
}

export default PottyEventCard