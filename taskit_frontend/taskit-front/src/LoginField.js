import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Link
}from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


class LoginField extends React.Component{

  state = {
    showPassword: false,
  };

handleClickShowPassword = () => {
  this.setState(state => ({ showPassword: !state.showPassword }));
};

handleChange = prop => event => {
   this.setState({ [prop]: event.target.value });
 };

 render() {
    const { classes } = this.props;

  return (
    <div className = "LoginBox">

        <FormControl fullWidth={true}>
          <Input id="Username" placeholder ="Username"/>
        </FormControl>

<FormControl fullWidth={true}>
    <InputLabel htmlFor="adornment-password">Password</InputLabel>
<Input
  id="adornment-password"
  fullWidth = {true}
  type={this.state.showPassword ? 'text' : 'password'}
  value={this.state.password}
  onChange={this.handleChange('password')}
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label="Toggle password visibility"
        onClick={this.handleClickShowPassword}
      >
        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  }
/>
  </FormControl>
      <div className={classes.margin}>
        <Grid container spacing={50} alignItems="flex-end">
        </Grid>
      </div>

    </div>
  );
 }
}




export default withStyles(styles)(LoginField);
