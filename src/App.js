import React, {Component} from 'react';
import './src-styles/App/App.scss';
import routes from './routes';


//components
import Nav from '../src/components/Nav/Nav';



class App extends Component{
  render(){
    return (
      <div className="App">
        <Nav/>
        {routes}
      </div>
    );
  }
}

export default App;
