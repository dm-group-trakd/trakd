import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
            // <form>
            //     <h1>Register</h1>
            //     <label>First Name</label>
            //     <input></input>
            //     <label>Last Name</label>
            //     <input></input>
            //     <label>Username</label>
            //     <input></input>
            //     <label>Password</label>
            //     <input ></input>
            //     <label>Email</label>
            //     <input ></input>
            //     <label>Phone Number</label>
            //     <input ></input>
            //     <button>Register</button>
            // </form>
            <Card>
                <CardContent>
                    <section>
                        {/* <img>Logo</img>
                         */}
                        <h1>Logo</h1>
                        <h1>Sign Up</h1>
                    </section>
                    <section>
                        <TextField
                            id="outlined-email-input"
                            label="First Name"
                            type="text"
                            name="first_name"
                            autoComplete="first_name"
                            margin="normal"
                            variant="outlined"
                        ></TextField>
                        <TextField
                            id="outlined-email-input"
                            label="Last Name"
                            type="text"
                            name="last_name"
                            autoComplete="last_name"
                            margin="normal"
                            variant="outlined"
                        ></TextField>
                        <TextField
                            id="outlined-email-input"
                            label="Username"
                            type="text"
                            name="username"
                            autoComplete="username"
                            margin="normal"
                            variant="outlined"
                        ></TextField>
                    </section>
                    <section>
                        <TextField
                            id="outlined-email-input"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="password"
                            margin="normal"
                            variant="outlined"
                        ></TextField>
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        ></TextField>
                        <TextField
                            id="outlined-email-input"
                            label="Phone Number"
                            type="phone"
                            name="phone_number"
                            autoComplete="phone_number"
                            margin="normal"
                            variant="outlined"
                        ></TextField>
                    </section>
                    <section>
                        <Button
                            variant="contained" 
                            color="primary"
                        >Register</Button>
                        <h1></h1>
                    </section>
                </CardContent>
            </Card>
        )
    }
}
