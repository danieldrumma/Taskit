import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import ReactDOM from 'react-dom';
import './Login.css';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LoginField from "./LoginField";
export default class Login extends Component {


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
							<Button variant="contained" color="primary">
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
              To register, please enter a username and password
              here.
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
