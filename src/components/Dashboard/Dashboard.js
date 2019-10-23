import React, {Component} from "react";
import Calories from "../calories/Calories"
import Tips from "../tips/Tips"

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={

        }

    }
    render(){
        return(
            <div>
                {/* <h1>Dashboard</h1> */}
                <Calories/>
                <Tips/>
            </div>
        )
    }

}