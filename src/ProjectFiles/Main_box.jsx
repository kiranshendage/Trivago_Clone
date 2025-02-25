import React from "react";
import "./Main_box.css";
import image_box_mainLogo from '../images/searchimage.png';

const Main_box = () =>{
    return(
        <div>
            <div className="main-content">
            <div className="main-section">
            <div className="image-box-main">
                <img src={image_box_mainLogo} alt=""/>
             </div> 
             </div>
             </div>
        </div>
    )
}
export default Main_box;