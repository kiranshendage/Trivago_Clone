import React from "react";
import JSON from "./Recently_Viewdb.json";
import ProductList from "./Recently_ViewChild";
import "./Trivago.css";
class Recently_View extends React.Component{
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

export default Recently_View;