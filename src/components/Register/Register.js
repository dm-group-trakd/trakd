import React, { Component } from 'react'

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            email: "",
            phone_number: 12223334444
        }
    }


    render() {
        return (
            <form>
                <h1>Register</h1>
                <label>First Name</label>
                <input></input>
                <label>Last Name</label>
                <input></input>
                <label>Username</label>
                <input></input>
                <label>Password</label>
                <input ></input>
                <label>Email</label>
                <input ></input>
                <label>Phone Number</label>
                <input ></input>
                <button>Register</button>
            </form>
        )
    }
}
