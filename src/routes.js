import React from "react";
import {Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";


export default(
<Switch>
    <Route exact path="/" component={Dashboard} ></Route>
    <Route path="/login" component={Login} ></Route>
    <Route path="/register" component={Register} ></Route>
</Switch>

)