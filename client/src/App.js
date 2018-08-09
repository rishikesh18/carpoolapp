import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import Navbar from './components/Navbar1';


import { withUser, update } from './services/withUser';

import CreateAccountPage from './pages/CreateAccountPage';
//import HomePage from './pages/HomePage1';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import Search from "./pages/RideRequest";
import Account from "./pages/AccountPage";
import Offer from "./pages/Rideoffer";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // this is going to double check that the user is still actually logged in
    // if the app is reloaded. it's possible that we still have a user in sessionStorage
    // but the user's session cookie expired.
    axios.get('/api/auth')
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
        if (err.response.status === 401) {
          update(null);
        }
      });
  }
  render() {
    //const { user } = this.props;
   // console.log(this.props);
    let user={name:"ram"};
   // this.props= user;
    return (
      <Router>
        <MuiThemeProvider>
          <Fragment>
            
            <Switch>
              <Route exact path="/" component={Home} />
              
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/create" component={CreateAccountPage} />

              
              <Route exact path="/search" component={Search} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/offer" component={Offer} />

              <Route component={NotFoundPage} />
            </Switch>
            {/* <Navbar id="usrname"
              user = {user}/> */}
            
          </Fragment>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default withUser(App);
