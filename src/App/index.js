import React, { Component } from 'react';
import AWS from 'aws-sdk';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

import PeopleIcon from '@material-ui/icons/People';

// import Dashboard from '../Dashboard'

class App extends Component {

  state = {
    loggedIn: false,
    userId: '',
    loading: false,

    driver: true,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  authenticateUser = (e) => {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    this.setState({
      loading: false,
      loggedIn: true,
    });

  }

  render() {
    const { username, loggedIn, loading, error, driver} = this.state;
    const { classes } = this.props;

    return (
      <div className="App">
        {
          !loggedIn ?
          (
            <div className="login-page-div">
              <div className="login-box-wrapper" style={{ backgroundImage: './bg.jpg' }}>
                <div className="form-box">
                  {/* <form onSubmit={this.authenticateUser}> */}
                    <div className="form-head">
                      Sign Up
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {
                        !driver ? 
                        <strong> Client </strong>
                        : <div> Client </div>
                      }
                      <Switch
                        checked={this.state.driver}
                        onChange={this.handleChange('driver')}
                        value="checkedB"
                        color="primary"
                      />
                      {
                        driver ? 
                        <strong> Driver </strong>
                        : <div> Driver </div>
                      }
                    </div>

                    {
                      driver
                      ? (
                        <React.Fragment>
                          <TextField
                            id="standard-name"
                            label="Name"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="Phone No"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="Address"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="Aadhar card number"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="PAN card number"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="Email"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="Profile photo"
                            type="file"
                            InputLabelProps={{
                              shrink: true
                            }}
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                        <TextField
                            id="standard-name"
                            label="Name"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="Company Name"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="Email"
                            type="email"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="Phone No"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                          <TextField
                            id="standard-name"
                            label="Address"
                            className={classes.textField}
                            margin="dense"
                            fullWidth
                          />
                        </React.Fragment>
                      )
                    }
                    {/* <div className="other-links">
                      <div className="link">
                        Forgot password?
                      </div>
                      <div className="link">
                        Register here
                      </div>
                    </div> */}
                    {
                      error ?
                      <span className="error-message"> {error} </span>
                      : undefined
                    }
                    {
                      loading ?
                      <button className="button disabled">  <div className="loader"/> </button> 
                      : <button className="button" type="submit" onClick={() => this.setState({ loggedIn: true })}> <div> Sign Up </div> </button>
                    }
                  {/* </form> */}
                  </div>
                </div>
            </div>
          ) : (
            <div> </div>
          )
        }
      </div>
    );
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export default withStyles(styles)(App);
