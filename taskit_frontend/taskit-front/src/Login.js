import React, { Component } from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import ReactDOM from 'react-dom';

export default class Login extends Component {
	constructor(props){
		super(props);
		this.state = {username: "",
		password: ""
		};
	}
	validateForm(){
		return this.state.username.length >0 && this.state.password.length > 0;
	}
	handleChange = event =>{
		this.setState({
		[event.targt.id]: event.target.value
		});
	}
	handleSubmit = event =>{
	event.preventDefault();
	}
	
  render() {
    return (
	<div className = "Login">
	  <form onSubmit={this.handleSubmit}>
	    <FormGroup controlID="username" bsSize="large">
		  <ControlLabel>UserName</ControlLabel>
		    <FormControl
			  autoFocus
			  type="username"
			  value={this.state.username}
			  onChange={this.handleChange}
			 />
		</FormGroup>
		<Button
			block
			bsSize="large"
			disabled={!this.validateForm()}
			type="submit"
			>
			Login
		 </Button>
	  </form>
	</div>
    );
  }
}
	
      
    