import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import AddNutrition from "./components/AddNutrition/AddNutrition";


export default(
<Switch>
    <Route path="/dashboard" component={Dashboard} ></Route>
    {/* <Route path="/login" component={Login} ></Route> */}
    <Route path="/register" component={Register} ></Route>
    <Route path="/add_nutrition" component={AddNutrition}></Route>
    <Route exact path="/" component={Login} ></Route>
</Switch>

)