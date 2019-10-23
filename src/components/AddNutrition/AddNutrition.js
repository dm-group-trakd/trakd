import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import './styles/AddNutrition.scss';


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
            [e.target.name]: e.target.value
        })
    }
    
    handleSearchSubmit = () => {
        axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.searchedFood}&app_id=${process.env.REACT_APP_app_id}&app_key=${process.env.REACT_APP_app_key}`)
        .then(res => {
            console.log(res.data.hints[0])
            this.setState({
                searchResults1: [...this.state.searchResults1, res.data.hints[0].food],
                searchResults2: [...this.state.searchResults1, res.data.hints[1].food],
                searchResults3: [...this.state.searchResults1, res.data.hints[2].food]
            })
            console.log(this.state.searchResults1)
        })
    }

    render() {
        return (
            <div className="add-nutrition-main">
                <Card >
                    <div className="card-content">
                    <CardContent>
                        <h1>Add Food</h1>
                        <TextField 
                            id="outlined-Password-input"
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
                        >Search</Button>
                        {this.state.searchResults1 ? this.state.searchResults1.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                            </div>
                        )): null}
                        {this.state.searchResults2 ? this.state.searchResults2.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                            </div>
                        )): null}
                        {this.state.searchResults3 ? this.state.searchResults3.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                            </div>
                        )): null}
                    </CardContent>
                    </div>
                </Card>
                
            </div>
        )
    }
}

export default AddNutrition
