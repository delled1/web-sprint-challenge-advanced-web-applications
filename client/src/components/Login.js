import React from "react";
import axios from "axios";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state ={
    userInfo: {
      username: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", this.state.userInfo)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload);
      this.props.history.push("/bubblepage")
    })
    .catch(err => {
      console.log(err)
    })
  }
 
  render() {
    return (
    <div>
      <form onSubmit={this.login}>
        <input
        type="text"
        name="username"
        placeholder="Username"
        value={this.state.userInfo.username}
        onChange={this.handleChange}
        />
        <input
        type="password"
        placeholder="Password"
        name="password"
        value={this.state.userInfo.password}
        onChange={this.handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
};

export default Login;
