import React from "react";
import {useHistory} from "react-router-dom"

function HomePageCard({data, imageSrc, imageName}){

    let history = useHistory()
    return (
        <>
        <button onClick={(()=>history.push(`/${data.id}`))}>
            <img src={imageSrc} style={{width:'10em'}}></img>
       <h1>{imageName}</h1>
        </button>
        <button onClick={(()=>history.push(`/newevent/${data.id}`))}>+</button>
        </>
    )
}


export default HomePageCard;