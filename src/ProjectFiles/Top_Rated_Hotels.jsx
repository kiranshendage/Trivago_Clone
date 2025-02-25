import React from "react";
import "./Trivago.css";
import ProductList from "./Top_Rated_HotelsChild";
import JSON from "./Top_Rated_Hotelsdb.json";
import "./Trivago.css";
class Top_Rated_Hotels extends React.Component{
    constructor(){
        super();
        this.state={                
            title: 'Trivago Page',  
            hotels : JSON         
        }
    }
    render(){
        return(
            <div>
                <ProductList prodlist={this.state.hotels}/> 
            </div>
        )
    }
}


export default Top_Rated_Hotels;