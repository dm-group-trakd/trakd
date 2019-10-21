import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser, getSession} from '../../redux/reducers/userReducer';
import './Styles/Login.scss'



class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount(){
        this.props.getSession()
    }

    handleSubmit = () => {
        const {username, password} = this.state;
        const {loginUser} = this.props;
        loginUser({username, password});
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        if(this.props.user_id){
            return <Redirect to="/dashboard"/>
        }
        return(
            <div className="Login-Container">
            <Card>
                <div className="Login-Box">
                <CardContent>
                    
                    <section>
                        {/* <img>Logo</img>
                         */}
                         <div className="Image-Container">
                        <img src = "https://files.slack.com/files-pri/T039C2PUY-FP8DJ32Q2/cover.png" id="Logo"/>
                        </div>
                        <h1 id="Sign-In">Sign In</h1>
                    </section>
                    <section>
                        <TextField
                            id="outlined-first_name-input"
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
                            id="outlined-phone_number-input"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="password"
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
                                className = "Login-Button"
                            >Login</Button>
                        <h1 className="Register-Link">Don't have an account? Register <Link to="/register">here!</Link></h1>
                    </section>
                   
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
    loginUser,
    getSession
})(Login)