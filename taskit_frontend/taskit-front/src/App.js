import React, { Component } from 'react';
//import { Router, Route} from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from  './Login';
import HomePage from './HomePage';
import ButtonAppBar from './ButtonAppBar';


class Main extends Component {

    render() {
      return (
        <div className ="App">
          <div className = "App-header">
            <h2> Welcome to Taskit!</h2>
              <ButtonAppBar />
          </div>
                <p className="App-intro">
        Taskit is a website designed to help groups manage and keep track of day to day, or long term activities.
        It allows group members to request a task be completed and see who accepted their task, how long ago,
        or if the task has been completed. </p>
        <p className="App-intro">The features provided by Taskit can assist companies stay on top of
        busy agendas, or families assign chores! Whether managing a company iternerary, planning a party, giving you children
        chores, or divvy work for a school project, if you have tasks, Taskit will help you stay organized.
                </p>
              <small class = "small">
                Credit: Daniel Boaitey, James Jackson
              </small>
      </div>
  );
  }

}

class App extends Component{
// constructor(props) {
  //    super(props);
   // this.ButtonAppBar = this.ButtonAppBar.bind(this);
//  }
  render(){
    return(
        <div>
           <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/login' component={Login} />
              <Route path = '/homepage'component ={HomePage} />              
            </Switch>
          </div>
  );
  }
}

export default App;
