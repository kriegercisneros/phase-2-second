import React, { useState } from "react"

function CreateNewPottyEvent(){
    // const []= useState("")
    return(
        <div>
            <h1>New Event</h1>
            <form>
                <div>
                    <h2>What Happened?</h2>
                    <input type ="radio" id="madeIt"></input>
                    <label htmlFor="madeIt">Made It</label>
                    <input type ="radio" id="accident"></input>
                    <label htmlFor="accident">Accident</label>
                </div>
                <div>
                    <h2>What Came Out?</h2>
                    <input type ="radio" id="#1"></input>
                    <label htmlFor="#1">#1</label>
                    <input type ="radio" id="#2"></input>
                    <label htmlFor="#2">#2</label>
                    <input type ="radio" id="#12"></input>
                    <label htmlFor="##12">#1&2</label>
                </div>
                <div id ="madeItFollowUp">
                    <h2>Follow Up</h2>
                    <input type ="checkbox" id="flushed"></input>
                    <label htmlFor ="flushed">Flushed</label>
                    <input type ="checkbox" id="washedHands"></input>
                    <label htmlFor ="washedHands">Washed Hands</label>
                    <input type ="checkbox" id="notifiedProvider"></input>
                    <label htmlFor ="notifiedProvider">Notified Provider</label>
                </div>
                <div id ="accidentFollowUp">
                    <h2>Follow Up</h2>
                    <input type ="checkbox" id="almostMadeIt"></input>
                    <label htmlFor ="almostMadeIt">Almost Made It</label>
                    <input type ="checkbox" id="notifiedProvider"></input>
                    <label htmlFor ="notifiedProvider">Notified Provider</label>
                </div>
                <div>
                    <h2>Notes:</h2>
                    <input type ="text"></input>
                    <button type = "submit">Add Event</button>
                </div>
            </form>
        </div>
    )

}

export default CreateNewPottyEvent