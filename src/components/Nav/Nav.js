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
import {Link} from 'react-router-dom'



class Nav extends Component{
    constructor(){
        super();
        this.state={
            menuOpenStatus : "side-menu"
        }
    }

    componentDidMount(){
        this.props.getSession()
    }
    
    // componentDidUpdate(prevProps){
    //     if(prevProps.avatar === this.props.avatar){
    //         this.props.getSession()
    //     }
    // }

    handleLogout = () =>{
        this.props.logoutUser()
        this.props.history.push('/')
    }
        toggle=()=>{
        if(this.state.menuOpenStatus ==="side-menu-close"|| this.state.menuOpenStatus ==="side-menu"){
            this.setState({menuOpenStatus: "side-menu-open"});
            console.log("open")
        }
        else if(this.state.menuOpenStatus ==="side-menu-open"){
            this.setState({menuOpenStatus:"side-menu-close"})
            // console.log("close")
        }
    }

    render(){
        return(
            <div className="nav-main">

                <div className ="nav-container">
                    <section className="nav-logo-top">
                        <img className="nav-logo" src="https://i.imgur.com/oUglC7p.png" alt="Logo"/>
                    </section>
                    <div className="Nav-Links">
                        <Link to ="/dashboard">
                        <img src = "https://icon-library.net/images/pie-chart-icon-png/pie-chart-icon-png-23.jpg" id="dashboard-logo"/>
                        </Link> 
                        <Link to="/settings">
                    <img src = "https://cdn1.iconfinder.com/data/icons/internet-28/48/16-512.png" id="cogwheel"/>
                    </Link>
                    <Link to ="/about">
                        <img src = "https://pngimage.net/wp-content/uploads/2018/05/about-png-7.png" id="about-logo"/>
                    </Link>
                    </div>
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