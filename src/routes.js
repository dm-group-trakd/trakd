import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import AddNutrition from "./components/AddNutrition/AddNutrition";
import Settings from "./components/Settings/Settings";
import Calories from "./components/calories/Calories";
import About from "./components/About/About"



export default(
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add" component={AddNutrition} />
        <Route path="/settings" component={Settings} />
        <Route path = "/calories" component ={Calories}/>
        <Route path = "/about" component = {About}/>
    
        <Route render={() => {
            return <h1>404 Not Found</h1>
        }}/>
    </Switch>

)