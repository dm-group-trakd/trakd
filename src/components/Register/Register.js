import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser, getSession} from '../../redux/reducers/userReducer';
import './styles/Register.css';

class Register extends Component {
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

    handleSubmit = () => {
        const {first_name, last_name, username, email, password, phone_number} = this.state;
        const {registerUser} = this.props;
        registerUser({first_name, last_name, username, email, password, phone_number});
    }

    handleInput = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        if(this.props.user_id){
            return <Redirect to="/add"/>
        }
        return (
            
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
                            id="outlined-first_name-input"
                            label="First Name"
                            type="text"
                            name="first_name"
                            autoComplete="first_name"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInput}
                            required
                        ></TextField>
                        <TextField
                            id="outlined-last_name-input"
                            label="Last Name"
                            type="text"
                            name="last_name"
                            autoComplete="last_name"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInput}
                            required
                        ></TextField>
                        <TextField
                            id="outlined-username-input"
                            label="Username"
                            type="text"
                            name="username"
                            autoComplete="username"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInput}
                            required
                        ></TextField>
                    </section>
                    <section>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="password"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInput}
                            required
                        ></TextField>
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInput}
                            required
                        ></TextField>
                        <TextField
                            id="outlined-phone_number-input"
                            label="Phone Number"
                            type="phone"
                            name="phone_number"
                            autoComplete="phone_number"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInput}
                            required
                        ></TextField>
                    </section>
                    <section>
                            <Button
                                variant="contained" 
                                color="primary"
                                onClick={this.handleSubmit}
                            >Register</Button>
                        <h1>Already have an account? Login <Link to="/">here!</Link></h1>
                    </section>
                </CardContent>
            </Card>
        )
    }
}

const mapStateToProps = reduxState => {
    return{
        user_id: reduxState.userReducer.user_id
    }
}


export default connect(mapStateToProps, {
    registerUser,
    getSession
})(Register)
