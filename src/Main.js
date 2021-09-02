import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Home from './Home';

function Main() {
  
    return (
      <div className="h-100">    
        <Route exact path="/" component={Home}/>
        <Route exact path="/weather" component={App}/>
      </div>
    );
  }
  
  export default Main;
  