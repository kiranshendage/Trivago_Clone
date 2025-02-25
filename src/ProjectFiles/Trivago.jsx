import React from "react";
import "./Trivago.css";
import trivagoLogo from '../images/trivago_logo.png'; 

// ********************images*********************

import pic1Logo from '../images/pic1.png';

import deal_box1Logo from '../images/deal_box1.png';
import deal_box2Logo from '../images/deal_box2.png';
import deal_box3Logo from '../images/deal_box3.png';

import deal_box4Logo from '../images/hotdeal1.png';
import deal_box5Logo from '../images/hotdeal1.png';
import deal_box6Logo from '../images/hotdeal2.png';

import popular_deal_box_img5Logo from '../images/popular4.png';
import popular_deal_box_img6Logo from '../images/popular1.png';
import popular_deal_box_img7Logo from '../images/popular2.png';
import popular_deal_box_img8Logo from '../images/popular3.png';

import image_box_mainLogo from '../images/searchimage.png';

import { Link } from 'react-router-dom';





const Trivago = () =>{
    return(
        <div>
            <div className="navbar">
        <div className="navbar-logo">
            <div className="logo">
            <img src={trivagoLogo} alt="Trivago Logo" />
            </div>
        </div>
        <div className="nav-content">
            <div className="navfavorites">
                <i className="fa-regular fa-heart"></i>
                <Link to={"/Favorites"}>Favorites</Link>
            </div>
            <div className="navEn">
                <i className="fa-solid fa-globe"></i>
                <Link to={"/En"}>EN.₹</Link>
            </div>
            <div className="navLogin">
                <i className="fa-regular fa-user"></i>
                <Link to={"/login"}>Log in</Link>
            </div>
            <div className="navMenu">
                <i className="fa-solid fa-bars"></i>
                Menu
            </div>
        </div>
    </div>

    
    <div className="main-content">
        <div className="main-section">
            <div className="headline-block">
                <div className="heading1">
                    <h4>We compare hotel prices from over 100 sites</h4>
                </div>
            </div>
            
            <div className="search-bar-block">
                <div className="search-bar">
                    <div className="search-input">
                        <div className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="input-bar">
                            <input type="text" placeholder="Select Destination"/>
                        </div>
                    </div>
    
                    <div className="cheakin-out">
                        <div className="date-symbol">
                            <i className="fa-solid fa-calendar-days"></i>
                        </div>
                        <div className="date-input">
                            <div className="date-icon">
                                <small>Check in</small>
                            </div>
                            <div className="input-bar2">
                                <input type="date"/>
                            </div>
                        </div>
                        <strong>|</strong>
                        <div className="date-input">
                            <div className="date-icon">
                                <small>Check out</small>
                            </div>
                            <div className="input-bar2">
                                <input type="date"/>
                            </div>
                        </div>
                    </div>
    
                    <div className="submit">
                        <div className="friends-icon">
                            <i className="fa-solid fa-user-group"></i>
                        </div>
                        <div className="guest-input">
                            <div className="guest-headline1">
                                <small>Guests and rooms</small>
                            </div>
                            <div className="guest-headline2">
                                <h3>2Guests, 1Room</h3>
                            </div>
                        </div>
                        <div className="submit-icon">
                            <input type="submit" value="Search"/>
                        </div>
                    </div>
                </div>
            </div>

             <div className="section-pic1">
                <div className="pic1">
                    <img src={pic1Logo} alt=""/>
                </div>
             </div>

              <div className="recently-view">
                    <h2>Recently viewed</h2>
              </div>

               <div className="recently-view-box">
                    <div className="recently-box">
                        <div className="recently-box1">
                            <h3>Pondechery</h3>
                            <br/>
                            <p>2 Feb - 3 Feb </p>
                            <p>2 Guests, 1 Room</p>
                        </div>
                        <div className="recently-box2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="recently-box">
                        <div className="recently-box1">
                            <h3>Kolkata</h3>
                            <br/>
                            <p>2 Feb - 3 Feb </p>
                            <p>2 Guests, 1 Room</p>
                        </div>
                        <div className="recently-box2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="recently-box">
                        <div className="recently-box1">
                            <h3>Varanasi</h3>
                            <br/>
                            <p>2 Feb - 3 Feb </p>
                            <p>2 Guests, 1 Room</p>
                        </div>
                        <div className="recently-box2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="recently-box">
                        <div className="recently-box1">
                            <h3>Kanchipuram</h3>
                            <br/>
                            <p>2 Feb - 3 Feb </p>
                            <p>2 Guests, 1 Room</p>
                        </div>
                        <div className="recently-box2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
               </div>
               <div className="recently-view-box-showmore">
                    Show more →
               </div>

                <div className="deals-headline">
                    <h2>Hot hotel deals right now</h2>
                </div>
                
                <div className="deal-main-box">
                    <div className="deal-box">
                        <div className="deal-box-img">
                            <img src={deal_box1Logo} alt=""/>
                        </div>
                        <div className="deal-box-headine">
                            <h2>Vivanta Goa , Panji </h2>
                            <p>9.1 Excellent (121359) ⟟ Goa , India</p>
                        </div>
                        <div className="deal-box-lower">
                            <div className="hotel-site">
                                Hotel Site
                            </div>
                            
                            <div className="deal-about">
                                About
                            </div>
                            <h3>₹6,958</h3>
                            <div className="deal-pernight">
                                per night
                            </div>
                            <div className="deal-button">
                                <button>Cheack Deal</button>
                            </div>
                        </div>
                    </div>

                    <div className="deal-box">
                        <div className="deal-box-img2">
                            <img src={deal_box2Logo} alt=""/>
                        </div>
                        <div className="deal-box-headine">
                            <h2>Accord Puducherry </h2>
                            <p>9.1 Excellent (1219) ⟟ pondi , India</p>
                        </div>
                        <div className="deal-box-lower">
                            <div className="hotel-site">
                                Hotel Site
                            </div>
                            
                            <div className="deal-about">
                                About
                            </div>
                            <h3>₹8,258</h3>
                            <div className="deal-pernight">
                                per night
                            </div>
                            <div className="deal-button">
                                <button>Cheack Deal</button>
                            </div>
                        </div>
                    </div>


                    <div className="deal-box">
                        <div className="deal-box-img3">
                            <img src={deal_box3Logo} alt=""/>
                        </div>
                        <div className="deal-box-headine">
                            <h2>Season Paradise</h2>
                            <p>9.1 very Good (1359) ⟟ medu</p>
                        </div>
                        <div className="deal-box-lower">
                            <div className="hotel-site">
                                Hotel Site
                            </div>
                            
                            <div className="deal-about">
                                About
                            </div>
                            <h3>₹11,958</h3>
                            <div className="deal-pernight">
                                per night
                            </div>
                            <div className="deal-button">
                                <button>Cheack Deal</button>
                            </div>
                        </div>
                    </div> 
                </div>
<br/><br/>
                
                <div className="deals-headline">
                    <h2>Take a dip at these top-rated hotels</h2>
                </div>

                <div className="deal-main-box">
                    <div className="deal-box">
                        <div className="deal-box-img4">
                            <img src={deal_box4Logo} alt=""/>
                        </div>
                        <div className="deal-box-headine">
                            <h2>Hotel Santa Marta </h2>
                            <p>9.1 Excellent (11359)</p>
                        </div>
                        <div className="deal-box-lower">
                            <div className="hotel-site">
                                ⟟ Goa , India
                            </div>   
                            <div className="deal-about">
                                About
                            </div>
                            <h3>Beach     Pool     Spa</h3>
                            <br/>
                            <div className="deal-button">
                                <button>Cheack price</button>
                            </div>
                        </div>
                    </div>

                    <div className="deal-box">
                        <div className="deal-box-img5">
                            <img src={deal_box5Logo} alt=""/>
                        </div>
                        <div className="deal-box-headine">
                            <h2>La Luna Blance </h2>
                            <p>9.1 Excellent (61359)</p>
                        </div>
                        <div className="deal-box-lower">
                            <div className="hotel-site">
                                ⟟ Bendrome
                            </div>   
                            <div className="deal-about">
                                About
                            </div>
                            <h3>Beach     Pool     Spa</h3>
                            <br/>
                            <div className="deal-button">
                                <button>Cheack price</button>
                            </div>
                        </div>
                    </div>

                    <div className="deal-box">
                        <div className="deal-box-img6">
                            <img src={deal_box6Logo} alt=""/>
                        </div>
                        <div className="deal-box-headine">
                            <h2>Magic Natural resort</h2>
                            <p>9.1 Excellent (51359)</p>
                        </div>
                        <div className="deal-box-lower">
                            <div className="hotel-site">
                                ⟟ maldives 
                            </div>   
                            <div className="deal-about">
                                About
                            </div>
                            <h3>Beach     Pool</h3>
                            <br/>
                            <div className="deal-button">
                                <button>Cheack price</button>
                            </div>
                        </div>
                    </div>
                </div>


             
                <div className="popular-headline">
                    <h2>Popular Searches</h2>
                </div>
                 

            <div className="popular-deal-main-box">
                <div className="popular-deal-box">
                    <div className="popular-deal-box-img">
                        <img src={popular_deal_box_img5Logo} alt=""/>
                        <div className="popular-deal-box-headine">
                            <h2 id="popular3">Jaipur</h2>
                            
                            <h2 id="popular1">5,200 hotels</h2>
                            
                            <h2 id="popular2">Avg. 3,400</h2>
                            
                        </div>
                    </div>
                </div>
                <div className="popular-deal-box">
                    <div className="popular-deal-box-img6">
                        <img src={popular_deal_box_img6Logo} alt=""/>
                        <div className="popular-deal-box-headine">
                            <h2 id="popular3">Banaras</h2>
                            
                            <h2 id="popular1">3,200 hotels</h2>
                            
                            <h2 id="popular2">Avg. 2,400</h2>
                            
                        </div>
                    </div>
                </div>
                <div className="popular-deal-box">
                    <div className="popular-deal-box-img7">
                        <img src={popular_deal_box_img7Logo} alt=""/>
                        <div className="popular-deal-box-headine">
                            <h2 id="popular3">Kashmir</h2>
                            
                            <h2 id="popular1">7,200 hotels</h2>
                            
                            <h2 id="popular2">Avg. 5,400</h2>
                            
                        </div>
                    </div>
                </div>
                <div className="popular-deal-box">
                    <div className="popular-deal-box-img8">
                        <img src={popular_deal_box_img8Logo} alt=""/>
                        <div className="popular-deal-box-headine">
                            <h2 id="popular3">Keral</h2>
                            
                            <h2 id="popular1">6,200 hotels</h2>
                            
                            <h2 id="popular2">Avg. 4,400</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
             <div className="image-box-main">
                <img src={image_box_mainLogo} alt=""/>
             </div>     
        </div>
    </div>
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
export default Trivago;