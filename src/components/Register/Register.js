import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser, getSession} from '../../redux/reducers/userReducer';
import './styles/Register.scss';

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
            return <Redirect to="/"/>
        }
        return (
            <div className = "register-container">
                <Card>
                    <div className = "card-container">
                        <CardContent>
                            <div className = "card-content">
                            <section className = "head">
                                {/* <img>Logo</img>
                                */}
                                <img  className = "img" src = 'https://i.imgur.com/2EJZHHT.png' alt =""/>
                                <h1 className ="signUp">Sign Up</h1>
                            </section>
                            <div className = "inputs">
                            <section className = "first-row">
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
                            <section className = "second-row">
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
                                    type="number"
                                    name="phone_number"
                                    autoComplete="phone_number"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleInput}
                                    required
                                ></TextField>
                            </section>
                            </div>
                            <section className = 'register'>
                                    <Button
                                        className ="reg-btn"
                                        variant="contained" 
                                        color="primary"
                                        onClick={this.handleSubmit}
                                    >Register</Button>
                                <h1>Already have an account? Login <Link to="/">here!</Link></h1>
                            </section>
                            </div>
                        </CardContent>
                        </div>
                 </Card>
            </div>
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
