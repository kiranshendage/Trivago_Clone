import React from "react";
import JSON from "./Popular_Searchsdb.json";
import ProductList from "./Popular_SearchsChild";
import "./Trivago.css";

class Popular_Searchs extends React.Component{
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

export default Popular_Searchs;
