import React from "react";
import "./Trivago.css";
import { Link } from "react-router-dom";
// import LoginPage from "./LoginPage";
import trivagoLogo from '../images/trivago_logo.png'; // Import image
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={trivagoLogo} alt="" id="trivagoo" />
                </div>
                <div className="nav-content">
                    <div className="navfavorites">
                        <i className="fa-regular fa-heart"></i>
                        Favorites
                    </div>
                    <div className="navEn">
                        <i className="fa-solid fa-globe"></i>
                        EN.₹
                    </div>
                    <div className="navLogin">

                        <i className="fa-regular fa-user"></i>
                        <Link to="/login">Log in</Link>
                    </div>
                    <div className="navMenu">
                        <i className="fa-solid fa-bars"></i>
                        Menu
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;