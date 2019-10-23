import React, { Component } from 'react'
import { Card, CardContent } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./styles/Food.css"
import {getFood} from '../../redux/reducers/foodReducer';
import {connect} from 'react-redux';
import AddNutrition from '../AddNutrition/AddNutrition';


class Food extends Component {
    constructor() {
        super()
        this.state = {
            addFood: false
        }
    }

    componentDidMount(){
        this.props.getFood()
    }

    handleOpen = () => {
        console.log(true)
        this.setState({
            addFood: true
        })
    }

    handleClose = () => {
        console.log(false)
        this.setState({
            addFood: false
        })
    }

    render() {
        const foodMapped = this.props.food.map((food, i) => {
            return (
                <div className="food-mapped" key={i}>
                    <h1>{food.food}</h1>
                    <h1>{food.calories}</h1>
                    <h1>{food.fat}</h1>
                    <h1>{food.carbs}</h1>
                    <h1>{food.protein}</h1>
                </div>
            )
        })
        console.log(this.props.food)
        return (
            <>
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
                        {foodMapped}
                        <CardContent>
                            <div className="add-button">
                                <Fab color="primary" aria-label="add" onClick={this.handleOpen}>
                                    +
                                </Fab>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={this.state.addFood}
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={this.state.addFood}>
                <div >
                    <AddNutrition />
                </div>
                </Fade>
            </Modal>
        </>
        )
    }
}

const mapStateToProps = reduxState => {
    return{
        user_id: reduxState.userReducer.user_id,
        food: reduxState.foodReducer.food
    }
}


export default connect(mapStateToProps, {
    getFood
})(Food)