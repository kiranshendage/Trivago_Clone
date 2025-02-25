import React from "react";
import './LoginPage.css';
import LogInLogo from "../images/trivagoLoginLogo.png";
import LogLogo from "../images/trivagoLogo.png";

import GoogleLogo from "../images/google.png";
import AppleLogo from "../images/apple.png";
import FacebookLogo from "../images/facebook.png";
const LoginPage = () =>{
    return(
        <div>
            <div class="main-page">

<div class="first-box">
    <div class="first-box-upper">
        <img src={LogInLogo} alt=""/>
    </div>
    <div class="first-box-lower">
        <div class="first-box-lower1">
            <h2>Get ready to:</h2>
            <p>✔ Unlock our member prices and loyalty deals</p>
            <p>✔ Easily pick up your search again from any device</p>
            <p>✔ Save big with price alerts on our app</p>
        </div>
    </div>
</div>

<div class="second-box">
    <div class="logoo">
        <img src={LogLogo} alt=""/> 
    </div>
    <div class="Unlock">
        <h2>Unlock more savings as a</h2>
        <h2>member</h2>
    </div>
    <div class="login-text">
        <p>Log in or create account with your email</p>
        <input type="text" placeholder="Enter e-mail address"/>
    </div>
    <div class="login-button">
        <button>Continue</button>
    </div>
    <div class="or">
        --------------------   or continue with   -----------------------
    </div>
    <div class="app">
        <button class="btn1">
            <img src={GoogleLogo} alt=""/>
        </button>
        <button class="btn2">
            <img src={AppleLogo} alt=""/>
        </button>
        <button class="btn3">
            <img src={FacebookLogo} alt=""/>
        </button>
    </div>
    <div class="footer">
        <p>By creating an account, you agree to our Privacy.</p>
    </div>
</div>
    </div>
        </div>
    )
}
export default LoginPage;