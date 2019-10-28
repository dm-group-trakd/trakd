import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import './styles/AddNutrition.scss';
import {addFood} from '../../redux/reducers/foodReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class AddNutrition extends Component {
    constructor(){
        super();
        this.state = {
            searchedFood: '',
            searchResults1: [],
            searchResults2: [],
            searchResults3: []
        }
    }
    
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
            searchResults1: [],
            searchResults2: [],
            searchResults3: [],
            searchResults4: [],
            searchResults5: [],
            searchResults6: [],
            searchResults7: [],
            searchResults8: [],
            searchResults9: [],
            searchResults10: []
        })

    }
    
    handleSearchSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.searchedFood}&app_id=${process.env.REACT_APP_app_id}&app_key=${process.env.REACT_APP_app_key}`)
        .then(res => {
            this.setState({
                searchResults1: [...this.state.searchResults1, res.data.hints[0].food],
                searchResults2: [...this.state.searchResults2, res.data.hints[1].food],
                searchResults3: [...this.state.searchResults3, res.data.hints[2].food],
                searchResults4: [...this.state.searchResults4, res.data.hints[3].food],
                searchResults5: [...this.state.searchResults5, res.data.hints[4].food],
                searchResults6: [...this.state.searchResults6, res.data.hints[5].food],
                searchResults7: [...this.state.searchResults7, res.data.hints[6].food],
                searchResults8: [...this.state.searchResults8, res.data.hints[7].food],
                searchResults9: [...this.state.searchResults9, res.data.hints[8].food],
                searchResults10: [...this.state.searchResults10, res.data.hints[9].food]
            })
        })
    }

    handleAddFood = food => {
        this.props.addFood(food)
        this.props.handleClose()
    }

    render() {
        return (
            <div className="add-nutrition-main">
                <Card >
                    <form onSubmit={this.handleSearchSubmit} className="card-content">
                    <CardContent>
                        <h1>Add Food</h1>
                        <TextField 
                            id="outlined-Search-Food-input"
                            label="Search"
                            type="text"
                            name="searchedFood"
                            autoComplete="search"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInput}
                        />
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={this.handleSearchSubmit}
                            className = "search-button"
                            id="handle-search"
                        >Search</Button>
                        <div className="search-mapped">
                        {this.state.searchResults1 ? this.state.searchResults1.map((food, i) => (
                            <section className="search-results-p">
                                <h2>{food.label}</h2>
                                <div className="search-results" key={i}>
                                    <h1 id="Calories-H1">Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                    <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                    <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                    <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                                </div>
                                <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                            </section>
                        )): null}
                        {this.state.searchResults2 ? this.state.searchResults2.map((food, i) => (
                            <section className="search-results-p">
                            <h2>{food.label}</h2>
                            <div className="search-results" key={i}>
                                <h1>Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                            </div>
                            <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                        </section>
                        )): null}
                        {this.state.searchResults3 ? this.state.searchResults3.map((food, i) => (
                            <section className="search-results-p">
                            <h2>{food.label}</h2>
                            <div className="search-results" key={i}>
                                <h1>Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                            </div>
                            <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                        </section>
                        )): null}
                        {this.state.searchResults4 ? this.state.searchResults4.map((food, i) => (
                            <section className="search-results-p">
                            <h2>{food.label}</h2>
                            <div className="search-results" key={i}>
                                <h1>Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                            </div>
                            <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                        </section>
                        )): null}
                        {this.state.searchResults5 ? this.state.searchResults5.map((food, i) => (
                            <section className="search-results-p">
                            <h2>{food.label}</h2>
                            <div className="search-results" key={i}>
                                <h1>Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                            </div>
                            <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                        </section>
                        )): null}
                        {this.state.searchResults6 ? this.state.searchResults6.map((food, i) => (
                            <section className="search-results-p">
                            <h2>{food.label}</h2>
                            <div className="search-results" key={i}>
                                <h1>Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                            </div>
                            <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                        </section>
                        )): null}
                        {this.state.searchResults7 ? this.state.searchResults7.map((food, i) => (
                            <section className="search-results-p">
                            <h2>{food.label}</h2>
                            <div className="search-results" key={i}>
                                <h1>Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                            </div>
                            <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                        </section>
                        )): null}
                        {this.state.searchResults8 ? this.state.searchResults8.map((food, i) => (
                            <section className="search-results-p">
                            <h2>{food.label}</h2>
                            <div className="search-results" key={i}>
                                <h1>Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                            </div>
                            <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                        </section>
                        )): null}
                        {this.state.searchResults9 ? this.state.searchResults9.map((food, i) => (
                            <section className="search-results-p">
                            <h2>{food.label}</h2>
                            <div className="search-results" key={i}>
                                <h1>Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                            </div>
                            <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                        </section>
                        )): null}
                        {this.state.searchResults10 ? this.state.searchResults10.map((food, i) => (
                            <section className="search-results-p">
                            <h2>{food.label}</h2>
                            <div className="search-results" key={i}>
                                <h1>Calories: {parseInt(food.nutrients.ENERC_KCAL)} </h1>
                                <h1>Carbs: {parseInt(food.nutrients.CHOCDF)} </h1>
                                <h1>Fat: {parseInt(food.nutrients.FAT)} </h1>
                                <h1>Protein: {parseInt(food.nutrients.PROCNT)} </h1>
                            </div>
                            <Button color="primary" onClick={() => this.handleAddFood({
                                    food: food.label,
                                    calories: parseInt(food.nutrients.ENERC_KCAL),
                                    carbs: parseInt(food.nutrients.CHOCDF),
                                    fat: parseInt(food.nutrients.FAT),
                                    protein: parseInt(food.nutrients.PROCNT)
                                    })}>Add</Button>
                        </section>
                        )): null}
                        </div>
                    </CardContent>
                    </form>
                </Card>
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return{
        user_id: reduxState.userReducer.user_id
    }
}


export default withRouter(connect(mapStateToProps, {
    addFood
})(AddNutrition))
