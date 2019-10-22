import React, {Component} from "react";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getSession, logoutUser} from '../../redux/reducers/userReducer';
import './styles/Nav.css';
import {withRouter} from 'react-router-dom';



class Nav extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    componentDidMount(){
        this.props.getSession()
    }

    handleLogout = () =>{
        this.props.logoutUser()
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="nav-main">
                <section className="nav-logo-top">
                    <img className="nav-logo" src="https://i.imgur.com/oUglC7p.png" alt="Logo"/>
                </section>
                <section className="nav-bottom">
                    <img src={this.props.avatar} alt="avatar" className="avatar"/>
                    <Button
                        variant="contained" 
                        color="secondary"
                        onClick={this.handleLogout}
                        className = "Login-Button"
                    >Logout</Button>
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return{
        user_id: reduxState.userReducer.user_id,
        avatar: reduxState.userReducer.avatar
    }
}


export default withRouter(connect(mapStateToProps, {
    getSession,
    logoutUser
})(Nav))