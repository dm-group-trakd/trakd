import React, {Component} from "react";
import Calories from "../calories/Calories"


export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={

        }

    }
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <Calories/>
            </div>
        )
    }

}