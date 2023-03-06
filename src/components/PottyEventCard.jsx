import React from "react"

function PottyEventCard({event}){
    console.log(event.followUp.accident)
    return(
        <div>
            {/* this is a conditional statement to return one image if true, 
            the other if false--RENDER STATE TO DETERMINE TRUE/FALSE*/}
            {/* /*included here will be a series of if else statements showing 
            up null if the state for  */ }

                <div>
                    <h2>What Happened?</h2>
                    <h3>{event.eventType}
                        {/* <img src="https://as1.ftcdn.net/v2/jpg/04/01/31/82/1000_F_401318285_8t5nMxBTJ0Y9By3VHPnTKghO7V9AyM7x.jpg"></img> */}
                    </h3>
                </div>
                <div>
                    <h2>What Came Out?</h2>
                    <h3>{event.pottyType}</h3>
                </div>

                {event.followUp.madeIt ? (<div id ="madeItFollowUp">
                    <h2>Follow Up</h2>
                    {event.followUp.madeIt[0]? <h3>Flushed ✔️</h3> : <h3>Flushed 🗹</h3>}                   
                    {event.followUp.madeIt[1]? <h3>Washed Hands ✔️</h3>: <h3>Washed Hands 🗹</h3>}                    
                    {event.followUp.madeIt[2]? <h3>Notified Provider ✔️</h3> : <h3>Notified Provider 🗹</h3>}
                </div>): null }

                {event.followUp.accident ? (<div id ="accidentFollowUp">
                    <h2>Follow Up</h2>                   
                    {event.followUp.accident[0]? <h3>Almost Made It ✔️</h3> : <h3>Almost Made It 🗹</h3> }                 
                    {event.followUp.accident[1]? <h3>Notified Provider ✔️</h3> : <h3>Notified Provider 🗹</h3>}
                </div>) : null}
            
                <div>
                    <h2>Notes:</h2>
                    <p>{event.notes}</p>
                </div> <br></br><br></br>
        </div>
    )
}

export default PottyEventCard