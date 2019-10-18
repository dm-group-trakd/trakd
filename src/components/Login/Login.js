import React, {Component} from "react";



export default class Login extends Component{
    constructor(){
        super();
        this.state={

        }

    }
    render(){
        return(
            <form>
                <h1>Login</h1>
                <label>Username</label>
                <input></input>
                <label>Password</label>
                <input type="password"></input>
            </form>
        )
    }

}