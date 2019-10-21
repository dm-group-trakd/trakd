import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect} from 'react-router-dom';
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
<<<<<<< HEAD
            <form>
                <h1>Login</h1>
                <label>Username</label>
                <input></input>
                <label>Password</label>
                <input type="password"></input>
            </form>
=======
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
>>>>>>> master
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