import React, { Component } from 'react'
import './styles/Calculator.scss'

export default class Calculator extends Component {
    render() {
        return (
            <div className="Calculator-Container">
            <div className="Calculator">
                
                <iframe src="https://www.mealpro.net/calorie/?color=1e67c5" frameborder="0" width="800" height="600"></iframe>
            </div>
            <div className="Bmi">
            <iframe src="https://www.mealpro.net/bmi/?color=1e67c5" frameborder="0" width="800" height="500"></iframe>
            </div>
            </div>
        )
    }
}
