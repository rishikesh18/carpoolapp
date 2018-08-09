import axios from 'axios';
import React, { Component, Fragment } from 'react';
//import { List, ListItem } from 'material-ui/List';
import { withUser } from '../services/withUser';
import NavBar from "./../components/Navbar";
import Footer from "./../components/footer";
import OfferArea from "./../components/offerride";
import RequestArea from "./../components/requestride.js";

class HomePage extends Component {
  state = {
    stuff: null
  }
  componentDidMount() {
    // only try loading stuff if the user is logged in.
    if (!this.props.user) {
      return;
    }

    axios.get('/api/stuff')
      .then(res => {
        this.setState({
          stuff: res.data
        });
      })
      .catch(err => {
        // if we got an error, we'll just log it and set stuff to an empty array
        console.log(err);
        this.setState({
          stuff: []
        });
      });
  }
  render() {
    const { user } = this.props; // get the user prop from props
    const { stuff } = this.state; // get stuff from state

    return (
      <Fragment>
        {user && stuff &&
          <div>
            {/* <p id ="getUserName">{user.username}</p> */}
            <div><NavBar /></div>
            <div><OfferArea /><RequestArea /></div>
            
            <div><Footer /></div>
          </div>
        }
        {user && !stuff &&
          <div>Hold on, looking for your stuff...</div>
        }
        {!user &&
            <div className="col-md-8 col-md-offset-2"><div><a href="/login"><h1>Login or Register</h1></a></div></div>
          }
      </Fragment>
    );
  }
}

// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(HomePage);
