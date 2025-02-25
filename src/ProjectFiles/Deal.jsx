import React from "react";
import JSON from "./db1.json";
import ProductList from "./DealChild";
import "./Trivago.css";
class Deal extends React.Component{
    constructor(){
        super();
        this.state={                //state is a object which is used to store the data
            title: 'Trivago Page',   //props 
            hotels : JSON           //JSON is a object which is used to store the data
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

export default Deal;
