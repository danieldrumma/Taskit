import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Login from  './Login';
import ButtonAppBar from './ButtonAppBar'


class App extends Component{
  constructor(props){
    super(props);
   // this.ButtonAppBar = this.ButtonAppBar.bind(this);
  }


  render(){
    return(
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
//-------------- MUI Injection Below ---------------
}





//export default withStyles(styles)(ButtonAppBar);

export default App;
