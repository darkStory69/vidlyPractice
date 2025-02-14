import React, { Component } from "react";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              name="username"
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={account.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
