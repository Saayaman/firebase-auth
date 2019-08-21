import React, { Component } from 'react'

export default class SignUp extends Component {
  state = {
    username: '',
  }
  render() {
    const { username } = this.state;
    return (
      <form>
        <input
          name="username"
          value={username}
          type="text"
          placeholder=""
        />
      </form>
    )
  }
}
