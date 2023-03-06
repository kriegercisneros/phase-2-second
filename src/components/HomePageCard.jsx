import React from "react";
import {useHistory} from "react-router-dom"

function HomePageCard({data, imageSrc, imageName}){
    // console.log(data.id)
    let history = useHistory()
    return (
        <>
        <button onClick={(()=>history.push(`/${data.id}`))}>
            <img src={imageSrc}></img>
       <h1>{imageName}</h1>
        </button>
        <button onClick={(()=>history.push(`/newevent/${data.id}`))}>+</button>
        </>
    )
}


export default HomePageCard;