import React, { Component } from "react";
import Calories from "../calories/Calories"
import Food from "../Food/Food"
import Tips from "../tips/Tips"
import "./styles/Dashboard.css"
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
           tips:""
        }
    }
   
    render() {
        return (
            <div className="dashboard-container">
                {/* <h1>Dashboard</h1> */}
                <div className ="right-components">
                    <Calories />
                <div>
                    <Tips
                    />
                </div>
                </div>
                <div>
                    <Food />
                </div>
            </div>
        )
    }

}