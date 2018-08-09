import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { update } from '../services/withUser';
import "../components/pages.css";

class LoginPage extends Component {
  state = {
    username: null,
    password: null
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.props);
    const { username, password } = this.state;
    const { history } = this.props;

    // post an auth request
    axios.post('/api/auth', {
      username,
      password
    })
    .then(user => {
      // if the response is successful, update the current user and redirect to the home page
      update(user.data);
      history.push('/');
    })
    .catch(err => {
      // an error occured, so let's record the error in our state so we can display it in render
      // if the error response status code is 401, it's an invalid username or password.
      // if it's any other status code, there's some other unhandled error so we'll just show
      // the generic message.
      this.setState({
        error: err.response.status === 401 ? 'Invalid username or password.' : err.message
      });
    });
  }
  render() {
    const { error } = this.state;

    return (
      // <Grid fluid>
      <div className ="container col-md-6 col-md-offset-3">

          <div className="loginForm ">
              <div className= "row">
                  <div className="ol-md-6 col-md-offset-3">
                  <form onSubmit={this.handleLogin}>
                      <h1>Log In To Use APP</h1>
                      {error &&
                        <div>
                          {error}
                        </div>
                      }
              <div>
                <TextField
                  name="username"
                  hintText="Username"
                  floatingLabelText="Username"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="password"
                  hintText="Password"
                  floatingLabelText="Password"
                  type="password"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div className="row">
              <div id="loginButton col-md-1">
                <RaisedButton primary type="submit">
                  Log In
                </RaisedButton>
              </div>
           <br/>
             <div id="registerButton col-md-1">
                <Link to="/create">
                <RaisedButton >
                    Register
                </RaisedButton>
                </Link>
              </div>
              </div>
              
            </form>
                  </div>
              </div>
          </div>
      
      
      </div>

        /* <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={this.handleLogin}>
              <h1>Log In</h1>
              {error &&
                <div>
                  {error}
                </div>
              }
              <div>
                <TextField
                  name="username"
                  hintText="Username"
                  floatingLabelText="Username"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="password"
                  hintText="Password"
                  floatingLabelText="Password"
                  type="password"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <RaisedButton primary type="submit">
                  Log In
                </RaisedButton>
              </div>
              <p>
                or
              </p>
              <p>
                <Link to="/create">
                Register
                </Link>
              </p>
            </form>
          </Col>
        </Row>
      </Grid> */
    );
  }
}

export default LoginPage;
