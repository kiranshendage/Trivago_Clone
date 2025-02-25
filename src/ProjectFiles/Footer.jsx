import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
        <div>
        <div className="footer">
        <div className="footer-main-content">
            <div className="footer-main-section">

                <div className="first-line">
                    <div className="first-line-headline">
                        <h1>trivago</h1>
                    </div>
                    <div className="first-line-symbol">
                    
                    </div>
                </div>
                <div className="second-line">
                    <select name="Select Country" id="country">
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Iran">Iran</option>
                        <option value="Bangladesh">Bangladesh</option>
                    </select>
                </div>

                <div className="last-main-block">
                    <div className="last-main-block-col1">
                        <p>Company</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Investor relations</p>
                        <p>Mobile apps - searching on the go</p>
                        <p>trivago Business Studio</p>
                    </div>

                    <div className="last-main-block-col2">
                        <p>Help</p>
                        <p>Learn how trivago works</p>
                        <p>Terms and conditions</p>
                        <p>Legal information</p>
                        <p>Do Not Sell My Personal Information</p>
                        <p>Privacy notice</p>
                        <p>DSA information</p>
                        <p>Cyber Security</p>
                    </div>
               
                    <div className="last-main-block-col3">
                        <h3>Get exclusive inspiration for your next stay – subscribe to our newsletter.</h3>
                        <div className="subscribe">
                            <input type="text" placeholder="E-mail address"/>
                            <button>Submit</button>
                        </div>
                        <div className="last">
                            <p>trivago N.V., Kesselstraße 5-7, 40221 Düsseldorf, Germany
                                Copyright 2025 trivago | All rights reserved.</p>
                        </div>  
                    </div>
               
                </div>

                

            </div>
        </div>
    </div>    
        </div>
    )
}
export default Footer;