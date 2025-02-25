import React from "react";
import "./Fav.css";
import Favourate from "../images/Fav.png";

const Fav = () =>{
    return(
        <div>
            <div class="fav-main-box-parent">
        <div class="fav-main-box-child">
            <div class="fav-upper-box">
                <h2>Keep track of stays you like</h2>
                <p>Log in or create an account to save your favourite stays to your account and create your own lists.</p>
            </div>
            <h1>Your favourites</h1>
            <div class="fav-card">
                <img src={Favourate} alt=""/>
            </div>
            <h4>Your Next Stay (0 Stay)</h4>
        </div>
    </div>
        </div>
    )
}
export default Fav;