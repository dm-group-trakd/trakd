import React, { Component } from 'react'
import { Card, CardContent, Button } from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./styles/Food.scss"
import {getFood, deleteFood, deleteAllFood} from '../../redux/reducers/foodReducer';
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

    // componentDidUpdate(prevProps) {
    //     if(prevProps.food !== this.props.food) {
    //         this.props.getFood()
    //     }
    // }

    handleOpen = () => {
        this.setState({
            addFood: true
        })
    }

    handleClose = () => {
        this.setState({
            addFood: false
        })
    }

    deleteFood = (nutrition_id) => {
        this.props.deleteFood(nutrition_id)
    }

    deleteAllFood = () => {
        this.props.deleteAllFood();
    }

    render() {
        const foodMapped = this.props.food.map((food, i) => {
            return (
                <div className="food-mapped" key={i}>
                    <div className = 'food-name'>
                        <h1>{food.food}</h1>  
                    </div>
                    <div className ='food-calories'>
                        <h1>{food.calories}</h1>
                    </div>
                    <div className = 'food-fat'>
                        <h1>{food.fat}</h1>
                    </div>
                    <div className = 'food-carbs'>
                        <h1>{food.carbs}</h1>
                    </div>
                    <div className ='food-protein'>
                        <h1>{food.protein}</h1>
                    </div>
                    <button id="deleteButtonFood" className ="delete-btn" onClick = {() => this.deleteFood(food.nutrition_id)}><img src ='https://cdn2.iconfinder.com/data/icons/cleaning-19/30/30x30-10-512.png' id = 'trash'></img></button>
                </div>
            )
        })
        return (
            <>
            <div className="food-container">
                <Card>
                    <div className="card">
                        <Button onClick={this.deleteAllFood}>Reset All Food</Button>
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
                    <AddNutrition handleClose={this.handleClose}/>
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
    getFood, deleteFood, deleteAllFood
})(Food)