import React, { Component } from 'react'
import { Card, CardContent } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import "./styles/Food.css"

class Food extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div className="food-container">
                <Card>
                    <div className="card">
                        <div className="dashboard-card">
                            <h1>Food Name</h1>
                            <h1>Calories</h1>
                            <h1>Fat</h1>
                            <h1>Carbs</h1>
                            <h1>Protein</h1>                   
                        </div>
                        <CardContent>
                            <div className="add-button">
                                <Fab color="primary" aria-label="add">
                                    +
                                </Fab>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </div>
        )
    }
}

export default Food