import React, { Component } from 'react'
import { withFirebase } from '../firebaseContext';
import firebase from 'firebase/app';
import "firebase/auth";
class SignUp extends Component {
  state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    phoneNumber: 0,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    const { email, passwordOne } = this.state;
    const { firebase } = this.props;
    firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
    .then((authUser) => {
      console.log('login success!')
    }).catch((err) => this.setState({
      error: err,
    }));
    e.preventDefault();
  }

  handleFacebookLogin = () => {
    this.props.firebase.doFacebookLogin().then((result) => {
      console.log('success! facebook', result);
      }).catch((err) => {
        return err;
      });
  }

  handleGoogleLogin = () => {
    this.props.firebase.doGoogleLogin().then((result) => {
      console.log('success!', result);
      }).catch((err) => {
        return err;
      });
  }

  handlePhoneNumber = () => {
    console.log(this.state.phoneNumber);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': function(response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        this.onSignInSubmit();
      },
      'expired-callback': function() {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    });
  }

  onSignInSubmit = () => {
    this.props.firebase.verifyWithPhoneNumber(this.state.phoneNumber).then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log('success phone');
    }).catch(function (error) {
     console.log(error)
    });
  }



  render() {
    const { username, email, passwordOne, passwordTwo, error, phoneNumber } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' ||  email === '' || username === '';
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            name="username"
            value={username}
            onChange={this.handleChange}
            type="text"
            placeholder="Full name"
          />
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            type="email"
            placeholder="email"
          />
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.handleChange}
            type="password"
            placeholder="password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.handleChange}
            type="password"
            placeholder="confirm password"
          />
          <button disabled={isInvalid} type="submit">Sign Up</button>
          {error && <p>{error.message}</p>}
        </form>
        <hr />
        <button onClick={this.handleFacebookLogin}>Facebook login</button>
        <button onClick={this.handleGoogleLogin}>Google login</button>

        <input
          name="phoneNumber"
          value={phoneNumber}
          onChange={this.handleChange}
          type="tel"
          placeholder="phonenumber"
        />
        <button onClick={this.handlePhoneNumber}>Phone number</button>
      </>
    )
  }
}

export default withFirebase(SignUp);