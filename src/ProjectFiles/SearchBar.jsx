import React from "react";
import "./Search_Bar.css";
const Search_Bar = () =>{
    return(
        <div>
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
                </div>
            </div>   
        </div>
    )
}
export default Search_Bar;