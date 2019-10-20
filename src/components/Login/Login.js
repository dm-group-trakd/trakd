import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect} from '@reach/router';
import {connect} from 'react-redux';
import {loginUser, getSession} from '../../redux/reducers/userReducer';



class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
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
            <Card>
                <CardContent>
                    <section>
                        {/* <img>Logo</img>
                         */}
                        <h1>Logo</h1>
                        <h1>Sign In</h1>
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
                            >Login</Button>
                        <h1>Don't have an account? Register <Link to="/register">here!</Link></h1>
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
    loginUser,
    getSession
})(Login)