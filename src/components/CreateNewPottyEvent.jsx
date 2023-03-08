import React, { useState, } from "react"
import {useParams} from "react-router-dom"
import { format } from 'date-fns'

function CreateNewPottyEvent(){
    const [whatHappened, setWhatHappened]= useState("")

    const [whatCameOut, setWhatCameOut]= useState("")

    const [flushed, setFlushed]= useState(false)
    const [washedHands, setWashedHands] =useState(false)
    const [notifiedProvider, setNotifiedProvider] = useState(false)

    const [almostMadeIt, setAlmostMadeIt] = useState(false)
    const [notifiedProviderAccident, setNotifiedProviderAccident] = useState(false)

    const [notes, setNotes]= useState("")

    const params = useParams()
    

    let madeItFollowUpObj = {
        flushed:flushed, 
        washedHands:washedHands,
        notifiedProvider:notifiedProvider
    }
    console.log(madeItFollowUpObj)

    let accidentFollowUpObj = {
        almostMadeIt : almostMadeIt,
        notifiedProviderAccident : notifiedProviderAccident
    }

    whatHappened === "Made It" ? accidentFollowUpObj = null : madeItFollowUpObj = null; 

    function handleRadioClick(e){
    setWhatHappened(e.target.value)
    }
    function handleRadio1Click(e){
        setWhatCameOut(e.target.value)
    }

    function handleFlushed(){
        setFlushed(!flushed)
    }

    function handleWashed(){
        setWashedHands(!washedHands)
    }

    function handleNotified(){
    setNotifiedProvider(!notifiedProvider)
    }
    function handleAlmost(){
        setAlmostMadeIt(!almostMadeIt)
    }

    function handleNotifiedAccident(){
        setNotifiedProviderAccident(!notifiedProviderAccident)
    }
    let postedObj={};

    let date = format ( new Date(), 'do MMMM Y h:mm a')
    function handleSubmit(e){
        accidentFollowUpObj === null ?(postedObj = {
            date:date,
            kidId: parseInt(params.id),
            eventType: whatHappened,
            pottyType: whatCameOut,
            followUp:{
                madeIt:[madeItFollowUpObj.flushed, madeItFollowUpObj.washedHands, madeItFollowUpObj.notifiedProvider],
                accident: null
        },
            notes:notes
        }):(postedObj={
            date:"",
            kidId: parseInt(params.id),
            eventType: whatHappened,
            pottyType: whatCameOut,
            followUp:{
                madeIt: null,
                accident:[accidentFollowUpObj.accident, accidentFollowUpObj.notifiedProviderAccident]
        },
            notes:notes
        })
        
    e.preventDefault();
     fetch('http://localhost:3000/events', 
     {
         method:"POST",
         headers:{
             "Content-Type":"application/json",
             "Accept":"application/json"
         },
         body:JSON.stringify(postedObj)
     })
     .then(response=>response.json())
     .then(data=>console.log(data))
}
    return(
        <div>
            <h1>New Event</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>What Happened?</h2>
                    <input type ="radio" id="madeIt" name="radio" value="Made It" onChange={handleRadioClick}></input>
                    <label htmlFor="madeIt">Made It</label>
                    <input type ="radio" id="accident" name="radio" value="Accident" onChange={handleRadioClick}></input>
                    <label htmlFor="accident">Accident</label>
                </div>
                <div >
                    <h2>What Came Out?</h2>
                    <input type ="radio" id="#1" name="radio1" value="# 1" onChange={handleRadio1Click}></input>
                    <label htmlFor="#1">#1</label>
                    <input type ="radio" id="#2" name="radio1" value="# 2" onChange={handleRadio1Click}></input>
                    <label htmlFor="#2">#2</label>
                    <input type ="radio" id="#12" name="radio1" value="# 1 & 2" onChange={handleRadio1Click}></input>
                    <label htmlFor="##12">#1&2</label>
                </div>
                {whatHappened === "Made It" ? (
                <div id ="madeItFollowUp">
                    <h2>Made It Follow Up</h2>
                    <input type ="checkbox" id="flushed" value={flushed} onChange={handleFlushed}></input>
                    <label htmlFor ="flushed">Flushed</label>
                    <input type ="checkbox" id="washedHands" value={washedHands} onChange={handleWashed}></input>
                    <label htmlFor ="washedHands">Washed Hands</label>
                    <input type ="checkbox" id="notifiedProvider" value={notifiedProvider} onChange={handleNotified}></input>
                    <label htmlFor ="notifiedProvider">Notified Provider</label>
                </div>): (<div id ="accidentFollowUp">
                    <h2>Accident Follow Up</h2>
                    <input type ="checkbox" id="almostMadeIt" value={almostMadeIt} onChange={handleAlmost}></input>
                    <label htmlFor ="almostMadeIt">Almost Made It</label>
                    <input type ="checkbox" id="notifiedProvider" value={notifiedProviderAccident} onChange={handleNotifiedAccident}></input>
                    <label htmlFor ="notifiedProvider">Notified Provider</label>
                </div>)}

                <div>
                    <h2>Notes:</h2>
                    <input type ="text" value ={notes} onChange={((e)=>setNotes(e.target.value))}></input>
                    <button type = "submit">Add Event</button>
                </div>
            </form>
        </div>
    )
}
export default CreateNewPottyEvent