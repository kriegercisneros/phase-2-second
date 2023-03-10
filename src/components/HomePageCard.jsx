import React from "react";
import {useHistory} from "react-router-dom"
import Button from "react-bootstrap/Button"
import "./card.css"

function HomePageCard({data, imageSrc, imageName}){

    let history = useHistory()

    function handleImageClick(){
        history.push(`/${data.id}`)
    }
    
    function handleAddClick(){
        history.push(`/newevent/${data.id}`)
    }
    return (
        <div className="container5">
            <button  id="card" style={{borderRadius:'5%', padding:'2rem', borderColor:'green', backgroundColor:'rgb(209, 224, 210)', width:'20vw', height:'20vw'}} onClick={handleImageClick}>
            <img src={imageSrc} style={{width:'10em', width:'8vw'}}></img>
            <h1 id="cardtext">{imageName}</h1>
        </button>
            <button style={{borderRadius:'50%', borderColor:'green', backgroundColor:'rgb(233, 245, 234)', display:'flex'}} onClick={handleAddClick}>+</button>
        </div>
    )
}

export default HomePageCard;