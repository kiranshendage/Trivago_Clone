import React  from "react";
import "./En.css";

const En = () =>{
    return(
        <div>
            <div class="en-main-parent">
        <div class="en-main-child">
            <div class="en-wrap">
            <h3>Select language and currency</h3>
            <div class="en-upper-input">
                <p id="en1">Language</p>
                <select name="" id="en-select">
                    <option>Select language</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                    <option value="Telgu">Telgu</option>
                    <option value="Kannad">Kannad</option>
                    <option value="Urdu">Urdu</option>
                </select>
            </div>

            <div class="en-lower-input">
                <p id="en2">Currency</p>
                <select name="Select Currency" id="en-select">
                    <option>Select Currency</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="INR">INR</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <button>Apply</button>
            </div>
        </div>
    </div>
        </div>
    )
}
export default En;