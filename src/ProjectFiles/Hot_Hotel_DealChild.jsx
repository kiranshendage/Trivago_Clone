import React from "react";
import "./Trivago.css";

const Hot_Hotel_DealChild = ({prodlist}) =>{

    const renderList = (prodlist) =>{
         if(prodlist){
                return prodlist.map((data) => {
                    return(
                        <div key={data.id} className="deal-box">
                        <div className="deal-box-img">
                            
                            <img src={data.img } />
                        </div>
                        <div className="deal-box-headine">
                            <h2>{data.place}</h2>
                            <p>
                            {data.rating || " "  } {" - "}
                            {data.review || " "} {" - "}
                            {data.check  || " "} 
                            </p>
                        </div>
                        <div className="deal-box-lower">
                            <div className="hotel-site">
                            Hotel Site
                            </div>
                            
                            <div className="deal-about">
                            About
                            </div>
                
                            <h3>₹{data.price}</h3>
                            <div className="deal-pernight">
                            per night
                            </div>

                            <div className="deal-button">
                            <button>Check Deal</button>
                            </div>
                        </div>
                        </div> 
                    )
                }
            )
         }
    }
         return(
            <div className="main-content">
                <div className="main-section"> 
                <div className="deals-headline">
                <h2>Hot hotel deals right now</h2>
                </div> 
                <div className="deal-main-box">
                    {renderList(prodlist)}  
                    </div>
                </div>
            </div>
            )
        }
        export default Hot_Hotel_DealChild;