import React, {Component} from 'react';
import './src-styles/App/App.scss';
import {connect} from 'react-redux';
import {getSession} from './redux/reducers/userReducer';
import routes from './routes';


//components
import Nav from '../src/components/Nav/Nav';
import Login from './components/Login/Login';



class App extends Component{
  render(){
    return (
      <div className="App">
        {!this.props.user_id 
        ?
        <Login />
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


export default connect(mapStateToProps, {
  getSession
})(App)
