import React from "react";
import JSON from "./db1.json";
import ProductList from "./Hot_Hotel_DealChild";
import "./Trivago.css";
class Hot_Hotel_Deal extends React.Component{
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

export default Hot_Hotel_Deal;
