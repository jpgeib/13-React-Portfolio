import React from "react";

// import "./PhotoshopIcon.css";

const PhotoshopIcon = props => {
    return(
        <div>
            <img className="img-fluid icon" id ="photoshop-icon" alt="Photoshop" src={require('../../Images/PhotoShop_Icon.png')}/>
        </div>
    )
}

export default PhotoshopIcon;