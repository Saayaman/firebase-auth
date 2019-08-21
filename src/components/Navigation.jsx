import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes';

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li><Link to={ROUTES.LANDING}>Landing</Link></li>
        <li><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
        <li><Link to={ROUTES.SIGN_UP}>Sign Up</Link></li>
      </ul>
    )
  }
}

export default Navigation;
