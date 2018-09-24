import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {BrowserRouter,  Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import App from './App';
import './Login.css';
import HomePage from './HomePage';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LoginField from "./LoginField";


 class Login extends Component {

	state = {
	    open: false
	  };

	  handleClickOpen = () => {
	    this.setState({ open: true });
	  };

	  handleClose = () => {
	    this.setState({ open: false });
	  };

	styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});




  render() {
    return (

	<div className = "Login">
	 		<h2>
				Welcome to Taskit!
			</h2>
		 			<div className = "backgroundBox" >
		 					<LoginField />
							<Button variant="contained" color="primary" component ={Link} to="/homepage">
								Login
							</Button>
							<Button variant="contained" color="secondary" onClick={this.handleClickOpen} >
								Sign up
							</Button>
      		</div>


        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a Username and Password.

            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="email"
              halfWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="email"
              halfWidth
            />
          </DialogContent>
          <DialogActions>

            <Button  color="primary" onClick={this.handleClose}>
              Cancel
            </Button>

            <Button onClick={this.handleClose} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
	</div>
    );
  }
}

export default Login;
