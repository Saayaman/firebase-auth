import React, { Component } from 'react'
// import { withFirebase } from '../firebaseContext';
// import firebase from 'firebase/app';
// import "firebase/auth";

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

    this.props.userSignUp(email, passwordOne);
    // const { firebase } = this.props;
    // firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
    // .then((authUser) => {
    //   console.log('login success!')
    // }).catch((err) => this.setState({
    //   error: err,
    // }));
    e.preventDefault();
  }

  // handleFacebookLogin = () => {
  //   this.props.firebase.doFacebookLogin().then((result) => {
  //     console.log('success! facebook', result);
  //     }).catch((err) => {
  //       return err;
  //     });
  // }

  // handleGoogleLogin = () => {
  //   this.props.firebase.doGoogleLogin().then((result) => {
  //     console.log('success!', result);
  //     }).catch((err) => {
  //       return err;
  //     });
  // }


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
          {this.props.userError && <p>{this.props.userError.message}</p>}
        </form>
        <hr />
        {/* <button onClick={this.handleFacebookLogin}>Facebook login</button>
        <button onClick={this.handleGoogleLogin}>Google login</button> */}

      </>
    )
  }
}

export default SignUp;