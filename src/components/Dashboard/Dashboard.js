import React, { Component } from "react";
import Food from "../Food/Food"
import Tips from "../tips/Tips"
import "./styles/Dashboard.css"
import Carbs from "../carbs/Carbs"
import Calories from "../calories/Calories"
import Fat from "../Fat/Fat"
import ProteinChart from '../ProteinChart/ProteinChart'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            tips: "",
            switchCounter: 0
        }
    }
    showProtein = () => {
        this.setState({
            switchCounter: this.state.switchCounter = 1
        })
    }
    showFat = () => {
        this.setState({
            switchCounter: this.state.switchCounter = 2
        })
    }
    showCarbs = () => {
        this.setState({
            switchCounter: this.state.switchCounter = 3
        })
    }
    showCalories = () => {
        this.setState({
            switchCounter: this.state.switchCounter = 0
        })
    }

    render() {
        return (
            <div className="dashboard-container">
                {(() => {
                    
                    switch (this.state.switchCounter) {
                        case 0: return <div className="dash-components">
                            <div className = "right-components">
                                <Calories showCalories={this.showCalories} showProtein={this.showProtein} showFat={this.showFat} showCarbs={this.showCarbs} />
                            <div className = "tips">
                                <Tips/>
                            </div>
                            </div>
                            <div>
                                <img src = "https://files.slack.com/files-pri/T039C2PUY-FPDGQSN7L/clipart61677.png" className="right-components" id="Arrows"/>
                            </div>
                            <div className = "food">
                                <Food />
                            </div>
                          
                        </div>

                        case 1: return <div className="dash-components">
                            <div className = "right-components">
                                <ProteinChart showCalories={this.showCalories} showProtein={this.showProtein} showFat={this.showFat} showCarbs={this.showCarbs} />
                                <div className ="tips">
                                    <Tips />
                                </div>
                            </div>
                            <div>
                                <img src = "https://files.slack.com/files-pri/T039C2PUY-FPDGQSN7L/clipart61677.png" className="right-components" id="Arrows"/>
                            </div>
                            <div>
                                <Food />
                            </div>
                           
                        </div>

                        case 2: return <div className="dash-components">
                            <div className = "right-components">
                                <Fat showCalories={this.showCalories} showProtein={this.showProtein} showFat={this.showFat} showCarbs={this.showCarbs} />
                                <div className ="tips">
                                    <Tips />
                                </div>
                            </div>    
                            <div>
                                <img src = "https://files.slack.com/files-pri/T039C2PUY-FPDGQSN7L/clipart61677.png" className="right-components" id="Arrows"/>
                            </div>
                            <div>
                                <Food />
                            </div>
                        </div>

                        case 3: return <div className="dash-components">
                            <div className = "right-components">
                                <Carbs showCalories={this.showCalories} showProtein={this.showProtein} showFat={this.showFat} showCarbs={this.showCarbs} />
                                <div className = "tips">
                                    <Tips />
                                </div>   
                            </div> 
                            <div>
                                <img src = "https://files.slack.com/files-pri/T039C2PUY-FPDGQSN7L/clipart61677.png" className="right-components" id="Arrows"/>
                            </div>
                            <div>
                                <Food />
                            </div>
                        </div>
                        default: return <h1>Chart</h1>
                    }
                })()}

            </div>
        )
    }

}