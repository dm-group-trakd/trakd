import React, { Component } from "react";
import Calories from "../calories/Calories"
import Food from "../Food/Food"
import "./styles/Dashboard.css"

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        }

    }
    render() {
        return (
            <div className="dashboard-container">
                {/* <h1>Dashboard</h1> */}
                <div>
                    <Calories />
                </div>
                <div>
                    <Food />
                </div>
            </div>
        )
    }

}