import React, {Component} from 'react';
import './src-styles/App/App.scss';
import {connect} from 'react-redux';
import {getSession} from './redux/reducers/userReducer';
import routes from './routes';
import {withRouter} from 'react-router-dom';


//components
import Nav from '../src/components/Nav/Nav';
import Login from './components/Login/Login';
import Register from './components/Register/Register';



class App extends Component{


  render(){
    return (
      <div className="App">
        {!this.props.user_id 
        ?
        this.props.location.pathname === "/" ?
          <Login />
        :
        <Register />
        :
        <>
          <Nav/>
          {routes}
        </>
        }
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
