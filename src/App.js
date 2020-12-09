import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import DragUI from "./component/FlowOne/DragUI";
import Preview from './Preview';



class App extends React.Component {
 
  render() {
    
    return (
      <div>
        
          <Router>
          <Switch>
              <Route path="/" exact component={DragUI}/>
              <Route path="/Preview" component={Preview}/>
            </Switch>
          </Router>
        
      </div>
     
    )
  }
}

export default App;
