import React from "react";


function HomePageCard({displayImages, imageSrc, imageName}){
    return (
        <button>
            <img src={imageSrc}></img>
       {imageName}
        </button>
    )
}


export default HomePageCard;