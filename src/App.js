import React, {Component} from 'react';
import './src-styles/App/App.scss';
import {connect} from 'react-redux';
import {getSession, registerUser} from './redux/reducers/userReducer';
import routes from './routes';
import {withRouter} from 'react-router-dom';


//components
import Nav from '../src/components/Nav/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';



class App extends Component{
  render(){
    let content;
    if(!this.props.user_id && this.props.location.pathname == "/"){
      content = <Login />
    }else if(!this.props.user_id && this.props.location.pathname == "/register"){
      content = <Register/>
    }else if(this.props.user_id){
      content =<div id ="nav-flex"><Nav/>{routes}</div>
    }
    return (
      <div className="App">
      {content}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return{
      user_id: reduxState.userReducer.user_id
  }
}


export default withRouter(connect(mapStateToProps, {
  getSession
})(App))
