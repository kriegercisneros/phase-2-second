import React, { useState, } from "react"
import {useParams} from "react-router-dom"
import { format } from 'date-fns'
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm } from 'react-hook-form'

function CreateNewPottyEvent(){

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data =>console.log(data); 
    // console.log(watch("exampleRequired")) //watch input value by passing in the name of it

    // return(
    //     //handleSubmit will validate your inputs before invoking "onSubmit"
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         {/*register input into hook by invoking the register function */}
    //         <input defaultValue="test" {...register("example")} />

    //         {/*include validation with required or other standard HTML validation rules  */}
    //         <input {...register("exampleRequired", { required: true })}/>
    //         {/*errors will return when field validation fails */}
    //         {errors.exampleRequired && <span>This field is required.</span>}

    //         <input type="submit"></input>
    //     </form>
    // )



    const [whatHappened, setWhatHappened]= useState("")

    const [whatCameOut, setWhatCameOut]= useState("")

    const[madeIt, setMadeIt]=useState(false)
    const[accident, setAccident]=useState(false)
    const[one, setOne]=useState(false)
    const[two, setTwo]=useState(false)
    const[three, setThree]=useState(false)

    const [flushed, setFlushed]= useState(false)
    const [washedHands, setWashedHands] =useState(false)
    const [notifiedProvider, setNotifiedProvider] = useState(false)

    const [almostMadeIt, setAlmostMadeIt] = useState(false)
    const [notifiedProviderAccident, setNotifiedProviderAccident] = useState(false)

    const [notes, setNotes]= useState("")

    const params = useParams()
    
    // const [formData, setFormData] =useState({
    //     whatHappened: '',

    // })

    // setFormData({
    //     ...formData,
    //     [e.target.name]: [e.target.value]
    // })

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
    function handleMadeIt(e){
        setMadeIt(!madeIt);
        setWhatHappened(e.target.value)
    }
    function handleAccident(e){
        setAccident(!accident);
        setWhatHappened(e.target.value)
    }

    function handleOne(e){
        setOne(!one);
        setWhatCameOut(e.target.value)
    }
    function handleTwo(e){
        setTwo(!two);
        setWhatCameOut(e.target.value)
    }
    function handleThree(e){
        setThree(!three);
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

    let date = format ( new Date(), 'd MMMM Y')
    let time = format ( new Date(), 'h:mm a')

    
    function handleSubmit(e){
        accidentFollowUpObj === null ?(postedObj = {
            date:date,
            time:time,
            kidId: parseInt(params.id),
            eventType: whatHappened,
            pottyType: whatCameOut,
            followUp:{
                madeIt:[madeItFollowUpObj.flushed, madeItFollowUpObj.washedHands, madeItFollowUpObj.notifiedProvider],
                accident: null
        },
            notes:notes
        }):(postedObj={
            date:date,
            kidId: parseInt(params.id),
            eventType: whatHappened,
            pottyType: whatCameOut,
            followUp:{
                madeIt: null,
                accident:[accidentFollowUpObj.almostMadeIt, accidentFollowUpObj.notifiedProviderAccident]
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
     .then(reset())
}

function reset(){
    setMadeIt(false);
    setAccident(false);
    setOne(false);
    setTwo(false);
    setThree(false);
    setFlushed(false);
    setWashedHands(false);
    setNotifiedProvider(false);
    setAlmostMadeIt(false);
    setNotifiedProviderAccident(false);
    setNotes("");
}
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Form onSubmit={handleSubmit} style={{width:'30rem', justifyContent:'center', alignItems:'center', textAlign:'center', height: 'rem', color:'black', backgroundColor:'rgba(119, 145, 126, 0.5'}}>
             <h1>New Event</h1>
                <Form.Group>
                    <Form.Label style={{fontSize:'20px'}} class="font-weight-bold">What Happened?</Form.Label>
                    <br />  
                    <Form.Check checked={madeIt} type="radio" inline label="Made It!" name="madeIt" id="madeIt" value="Made It" onChange={((e)=>handleMadeIt(e))}/>
                    <Form.Check checked={accident} type="radio" inline label="Accident." name="group1" id="accident" value="Accident" onChange={((e)=>handleAccident(e))}/>
                </Form.Group>
                <br />
                <Form.Group >
                    <Form.Label style={{fontSize:'20px'}}>What Came Out?</Form.Label >
                    <br />
                    <Form.Check checked={one} type="radio" inline label="#1" name="group2" id="#1" value="#1" onChange={handleOne}/>
                    <Form.Check checked={two} type="radio" inline label="#2" name="group2" id="#2" value="# 2" onChange={handleTwo}/>
                    <Form.Check checked={three} type="radio" inline label="#1 & 2" name="group2" id="#12" value="# 1 & 2" onChange={handleThree}/>
                </Form.Group>
                <br />
                {whatHappened === "Made It" ? (
                <Form.Group id ="madeItFollowUp">
                    <Form.Label style={{fontSize:'20px'}}>Made It Follow Up</Form.Label>
                    <br />
                    <Form.Check checked={flushed} type="checkbox" inline label="Flushed" name="group3" id="flushed" value={flushed} onChange={handleFlushed}/>
                    <Form.Check checked={washedHands} type="checkbox" inline label="Washed Hands" name="group3" id="washedHands" value={washedHands} onChange={handleWashed}/>
                    <Form.Check checked={notifiedProvider} type="checkbox" inline label="Notified Provider" name="group3" id="notifiedProvider" value={notifiedProvider} onChange={handleNotified}/>
                </Form.Group>): (<Form.Group id ="accidentFollowUp">
                    <Form.Label style={{fontSize:'20px'}}>Accident Follow Up</Form.Label>
                    <br/>
                    <Form.Check checked={almostMadeIt} type="checkbox" inline label="Almost Made It" name="group3" id="almostMadeIt" value={almostMadeIt} onChange={handleAlmost}/>
                    <Form.Check checked={notifiedProviderAccident} type="checkbox" inline label="Notified Provider" name="group3" id="notifiedProviderAccident" value={notifiedProviderAccident} onChange={handleNotifiedAccident}/>
                </Form.Group>)}
                <br/>
                <Form.Group>
                    <FloatingLabel controlId="floatingTextarea" label="Notes">
                        <Form.Control as="textarea" placeholder="Add Your Notes Here" style={{height:'100px'}} value ={notes} onChange={((e)=>setNotes(e.target.value))}/>
                    </FloatingLabel>
                    {/* <input type ="text" value ={notes} onChange={((e)=>setNotes(e.target.value))}></input> */}
                    <Button type = "submit" style={{backgroundColor:'#FFEB33', borderColor:'green', color:'gray'}}>Add Event</Button>
                </Form.Group>
            </Form>
        </div>
    )

}
export default CreateNewPottyEvent
