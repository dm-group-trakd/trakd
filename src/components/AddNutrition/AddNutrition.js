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
    
    handleSearchSubmit = () => {
        axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.searchedFood}&app_id=${process.env.REACT_APP_app_id}&app_key=${process.env.REACT_APP_app_key}`)
        .then(res => {
            console.log(res.data.hints[0])
            this.setState({
                searchResults1: [...this.state.searchResults1, res.data.hints[0].food],
                searchResults2: [...this.state.searchResults1, res.data.hints[1].food],
                searchResults3: [...this.state.searchResults1, res.data.hints[2].food],
                searchResults4: [...this.state.searchResults1, res.data.hints[3].food],
                searchResults5: [...this.state.searchResults1, res.data.hints[4].food],
                searchResults6: [...this.state.searchResults1, res.data.hints[5].food],
                searchResults7: [...this.state.searchResults1, res.data.hints[6].food],
                searchResults8: [...this.state.searchResults1, res.data.hints[7].food],
                searchResults9: [...this.state.searchResults1, res.data.hints[8].food],
                searchResults10: [...this.state.searchResults1, res.data.hints[9].food]
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
                        {this.state.searchResults4 ? this.state.searchResults4.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                            </div>
                        )): null}
                        {this.state.searchResults5 ? this.state.searchResults5.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                            </div>
                        )): null}
                        {this.state.searchResults6 ? this.state.searchResults6.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                            </div>
                        )): null}
                        {this.state.searchResults7 ? this.state.searchResults7.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                            </div>
                        )): null}
                        {this.state.searchResults8 ? this.state.searchResults8.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                            </div>
                        )): null}
                        {this.state.searchResults9 ? this.state.searchResults9.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                            </div>
                        )): null}
                        {this.state.searchResults10 ? this.state.searchResults10.map((food, i) => (
                            <div className="search-results" key={i}>
                                <h1>{food.label}</h1>
                                <h1>{food.nutrients.ENERC_KCAL}</h1>
                                <Button>Add</Button>
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
