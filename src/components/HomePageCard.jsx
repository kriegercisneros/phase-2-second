import React, {useEffect} from "react";


function HomePageCard(){
    useEffect(()=>{
        fetch('http://localhost:3000/kids')
        .then(response=>response.json())
        .then(data=>{
            displayImages(data)
        })
    }, [])

function displayImages(items){
    items.map((item)=>{
        console.log(item.image)
    })
}

    return (
        <button>
            <img src=""></img>
            <img src=""></img>
        Hello this is my BUTTON!!!
        </button>
    )
}


export default HomePageCard;