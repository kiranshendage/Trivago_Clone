import React from 'react';
import "./Trivago.css";                  //custom css file imported

const DealChild  = (prodlist) => {         //functional component that accepts the products data passed to it
 
                                            //custom method, called from the view in the Render()  below
    const renderList = ({prodlist}) => {    //temp argument that receives the data passed to this component by Products Component
         
        if(prodlist){                       //if data exists
            return prodlist.map((data) => { //map() function iteratively executes once for each record, in the json data
                return(
                    // <div key={data.id} className="card col-md-3">
                    //     <div className="row"> 
                    //         <div className="card-img">
                    //             <img className="card-img-top" src={data.img} alt={data.name}/>
                    //         </div>
                    //         <hr/>
                    //             <span className="topTemp">{data.name}</span>
                    //         </div>
                    //         <div className="card-body">
                    //         <span className="max">Rs. {data.price}</span>  
                    //             <h4 className="card-title">{data.type}</h4>
                    //             <div className="card-text">
                    //                 <p className="day"> {data.price}</p>
                    //             </div>
                    //     </div>
                  
                    // </div>
                
    
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
            {/* Check if price exists */}
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
                    })
                }  
            }
            return(
                <div className="main-content">
                    <div className="main-section"> 
                    <div className="deals-headline">
                    <h2>Hot hotel deals right now</h2>
                    </div> 
                    <div className="deal-main-box">
                        {renderList(prodlist)}  {/* Calls the above custom function to render the data in the view */}
                        </div>
                        </div>
                </div>
            )
        }

export default DealChild;
