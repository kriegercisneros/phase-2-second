import React from "react";
import {useHistory} from "react-router-dom"

function HomePageCard({data, imageSrc, imageName}){
    // console.log(data.id)
    let history = useHistory()
    return (
        <button onClick={(()=>history.push(`/${data.id}`))}>
            <img src={imageSrc}></img>
       <h1>{imageName}</h1>
        </button>
    )
}


export default HomePageCard;