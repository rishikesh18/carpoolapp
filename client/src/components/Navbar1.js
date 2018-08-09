import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
//import AppBar from 'material-ui/AppBar';

//import LoginButton from './LoginButton';
//import LoginMenu from './LoginMenu';

import { update } from '../services/withUser';

const Navbar = (props) => {
  const { user } = props;
  const username = user ? user.username : null;
  const handleLogIn = () => {
    props.history.push('/login');
  };
  const handleLogOut = () => {
    axios.delete('/api/auth')
      .then(() => {
        // unsets the currently logged in user. all components wrapped in withUser
        // will be updated with a null user and rerender accordingly
        update(null);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    
        <div>{username} </div>
  )
};

  

export default withRouter(Navbar);

// const User = (props) => {
//   const { user } = props;
//   const username = user ? user.username : null;
//   const handleLogIn = () => {
//     props.history.push('/login');
//   };
//   const handleLogOut = () => {
//     axios.delete('/api/auth')
//       .then(() => {
//         // unsets the currently logged in user. all components wrapped in withUser
//         // will be updated with a null user and rerender accordingly
//         update(null);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   return (
   
//         <p username={username} onLogOut={handleLogOut} />
        
    
//   )
// };

// export default withRouter(Navbar, User);
