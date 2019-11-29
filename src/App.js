import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu'
import routes from './routes';
class App extends Component {

  showContentMenus = (routes) => {
    var result = null;

    if(routes.length){
       result = routes.map((route, index)=> {
         return (
           <Route 
                key={index}
                path={route.path}
                name={route.title}
                exact={route.exact}
                component= {route.main}
            ></Route>
         )
       })
    }

    return result;
  } 

  render(){
    
    return (
      
      <Router> 
        <Menu />

        <div className="container">
          <div className="row">
            <Switch>
             {this.showContentMenus(routes)}
            </Switch>
          </div>
        </div>

      </Router> 

    );
  }
}

export default App;
