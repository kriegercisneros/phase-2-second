import React, { useState, useEffect } from "react"
import {useParams} from "react-router-dom"

function CreateNewPottyEvent(){
    const [whatHappened, setWhatHappened]= useState("")

    const [whatCameOut, setWhatCameOut]= useState("")

    const [flushed, setFlushed]= useState(false)
    const [washedHands, setWashedHands] =useState(false)
    const [notifiedProvider, setNotifiedProvider] = useState(false)

    const [almostMadeIt, setAlmostMadeIt] = useState(false)
    const [notifiedProviderAccident, setNotifiedProviderAccident] = useState(false)

    const [madeItFollowUp, setMadeItFollowUp]= useState({})
    const [accidentFollowUp, setAccidentFollowUp] = useState({})

    const [notes, setNotes]= useState("")

    const params = useParams()
    const object = params
    console.log(object)

    let madeItFollowUpObj = {
        flushed:flushed, 
        washedHands:washedHands,
        notifiedProvider:notifiedProvider
    }
//do i need to set this in state??
    let accidentFollowUpObj = {
        almostMadeIt : almostMadeIt,
        notifiedProviderAccident : notifiedProviderAccident
    }

    whatHappened === "Made It" ? accidentFollowUpObj = null : madeItFollowUpObj = null

function handleRadioClick(e){
   setWhatHappened(e.target.value)
}
function handleRadio1Click(e){
    setWhatCameOut(e.target.value)
}

function handleFlushed(){
    setFlushed(!flushed)
    handleChecked()
}

function handleWashed(){
    setWashedHands(!washedHands)
    handleChecked()
}

function handleNotified(){
   setNotifiedProvider(!notifiedProvider)
   handleChecked()
}

//is this necessary to set this in state? 
function handleChecked(){
    setMadeItFollowUp(madeItFollowUpObj)
}

function handleAlmost(){
    setAlmostMadeIt(!almostMadeIt)
}

function handleNotifiedAccident(){
    setNotifiedProviderAccident(!notifiedProviderAccident)
}

// const newObjForPatching ={
//     date:"",
//     time:"",
//     eventType: whatHappened,
//     pottyType: whatCameOut,
//     followUp:{
//         madeIt:[madeItFollowUpObj.flushed, madeItFollowUpObj.washedHands, madeItFollowUpObj.notifiedProvider],
//         accident:[accidentFollowUpObj.almostMadeIt, accidentFollowUpObj.notifiedProviderAccident]
//     },
//     notes:notes
// }
// console.log(newObjForPatching)


function handleSubmit(e){
    e.preventDefault();
    // fetch(`http://localhost:3000/events`, 
    // {
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Accept":"application/json"
    //     },
    //     body:JSON.stringify({ 
    //         date:"",
    //          postId: {params.id}
    //         time:"",
    //         eventType: whatHappened,
    //         pottyType: whatCameOut,
    //         followUp:{
    //             madeIt:[madeItFollowUpObj.flushed, madeItFollowUpObj.washedHands, madeItFollowUpObj.notifiedProvider],
    //             // accident:[accidentFollowUpObj.almostMadeIt, accidentFollowUpObj.notifiedProviderAccident]
    //         },
    //         notes:notes})
    // })
    // .then(response=>response.json())
    // .then(data=>console.log(data))
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
{/*i also need to say that the input for whatever is not selected should be submitted as null; maybe put this 
in the handleSubmit function.  Yes that is what I will do, make the objects null in my submit function */ }
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