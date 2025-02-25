import React from "react";
import "./Trivago.css";
import { Link } from "react-router-dom";
// import LoginPage from "./LoginPage";
import trivagoLogo from '../images/trivago_logo.png'; // Import image
const Navbar = () =>{
    return(
        <div> 
            <div class="navbar">
                <div class="navbar-logo">
                    <div class="logo">
                        <img src={trivagoLogo} alt="" id="trivagoo"/>
                    </div>
                </div>
                <div class="nav-content">
                    <div class="navfavorites">
                        <i class="fa-regular fa-heart"></i>
                        Favorites
                    </div>
                    <div class="navEn">
                        <i class="fa-solid fa-globe"></i>
                        EN.₹
                    </div>
                    <div class="navLogin">
                        
                        <i class="fa-regular fa-user"></i>
                        <Link to="/login">Log in</Link>
                    </div>
                    <div class="navMenu">
                        <i class="fa-solid fa-bars"></i>
                        Menu
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;