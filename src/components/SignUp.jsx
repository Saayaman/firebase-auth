import React, { Component } from 'react'

export default class SignUp extends Component {
  state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' ||  email === '' || username === '';
    return (
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
    )
  }
}
