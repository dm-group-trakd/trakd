import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import AddNutrition from "./components/AddNutrition/AddNutrition";



export default(
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add" component={AddNutrition} />
        <Route render={() => {
            return <h1>404 Not Found</h1>
        }}/>
    </Switch>

)