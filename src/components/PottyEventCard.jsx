import React from "react"
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion';

function PottyEventCard({event, index}){
    return(
    <div>
      <Accordion.Item eventKey={index}>
        <Accordion.Header>{event.date}, {event.eventType}</Accordion.Header>
        <Accordion.Body >
        <Card border="warning">      
                {event.followUp.madeIt ? (<Card.Img style={{width:'22rem'}}variant="top" src="https://previews.123rf.com/images/briang77/briang771512/briang77151200985/49668817-fireworks-vector-icon.jpg"/>):
                (<Card.Img style={{width:'22rem'}} variant="top" src="https://static.vecteezy.com/system/resources/previews/016/627/402/non_2x/next-time-buttons-sign-label-speech-bubble-next-time-vector.jpg"/>)}
            <Card.Body>
                <div style={{textAlign:'center'}}>
                    <Card.Title style={{textAlign:'center'}}>{event.eventType}</Card.Title><br/>
                </div>
                <div style={{display:'flex'}}>      
                    {event.followUp.madeIt ? (<div id ="madeItFollowUp">
                        <Card.Subtitle>Follow Up</Card.Subtitle><br/>
                        {event.followUp.madeIt[0]? <Card.Text><i className="fa-regular fa-square-check"></i> Flushed </Card.Text> : <Card.Text><i className="fa-solid fa-circle-xmark"></i> Flushed </Card.Text>}                   
                        {event.followUp.madeIt[1]? <Card.Text><i className="fa-regular fa-square-check"></i> Washed Hands </Card.Text>: <Card.Text><i className="fa-solid fa-circle-xmark"></i> Washed Hands </Card.Text>}                    
                        {event.followUp.madeIt[2]? <Card.Text><i className="fa-regular fa-square-check"></i> Notified Provider </Card.Text> : <Card.Text><i className="fa-solid fa-circle-xmark"></i> Notified Provider </Card.Text>}
                    </div>): null }
                    {event.followUp.accident ? (<div id ="accidentFollowUp">
                        <Card.Subtitle>Follow Up</Card.Subtitle><br/>                   
                        {event.followUp.accident[0]? <Card.Text><i className="fa-regular fa-square-check"></i> Almost Made It</Card.Text> : <Card.Text><i className="fa-solid fa-circle-xmark"></i> Almost Made It </Card.Text> }                 
                        {event.followUp.accident[1]? <Card.Text><i className="fa-regular fa-square-check"></i> Notified Provider </Card.Text> : <Card.Text><i className="fa-solid fa-circle-xmark"></i> Notified Provider </Card.Text>}
                    </div>) : null}<br/>
                    <div style={{float:'right', paddingLeft:'5rem'}}>
                    {event.pottyType==='#1' ? (<i className="fa-solid fa-toilet fa-5x" style={{color:'#FFEB33'}}></i>): (<i className="fa-solid fa-toilet fa-5x" style={{color:'#4F351C'}}></i>)}
                    </div>
                </div>  
                    </Card.Body>
                <Card.Footer >
                    <Card.Text className="text-muted">Notes:</Card.Text>
                    <Card.Text>{event.notes}</Card.Text>
                </Card.Footer> 
        </Card>
        </Accordion.Body>
      </Accordion.Item>
        </div>
    );
}

export default PottyEventCard