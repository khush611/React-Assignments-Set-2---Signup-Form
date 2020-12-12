// import React, {Component, useState} from "react";
// import '../styles/App.css';

// const App = () => {
//   return (
//     <div id="main"></div>
//   )
// }

// export default App;
import React, { Component, useState } from "react";
import "./styles.css";

function nameCheck(s) {
  var val = s.split(" ").join("");
  var RegEx = /^[a-z0-9]+$/i;
  var valid = RegEx.test(val);
  return valid;
}

function welcomeMsg(s) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "@") {
      ans = ans + s[i];
    } else {
      ans = "Hello" + ans;
      return ans;
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: " ",
      gender: "male",
      phoneNumber: "",
      password: "",
      error: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleGenderChange(event) {
    this.setState({
      gender: event.target.value
    });
  }

  handlePhoneNumberChange(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === "" ||
      this.state.password === ""
    ) {
      this.setState({ error: "All fields are mandatory" });
    } else if (!nameCheck(this.state.name)) {
      this.setState({ error: "Name is not alphanumeric" });
    } else if (!this.state.email.includes("@")) {
      this.setState({ error: "Email must contain @" });
    } else if (
      !(
        this.state.gender === "male" ||
        this.state.gender === "female" ||
        this.state.gender === "other"
      )
    ) {
      this.setState({ error: "Please identify as male, female or others" });
    } else if (isNaN(this.state.phoneNumber)) {
      this.setState({ error: "Phone Number must contain only numbers" });
    } else if (this.state.password.length <= 6) {
      this.setState({ error: "Password must contain atleast 6 letters" });
    } else {
      this.setState({ error: welcomeMsg(this.state.email) });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div id="main">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              data-testid="name"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <br />
          <label>
            Email id:
            <input
              data-testid="email"
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <br />
          <label>
            Gender:
            <select
              data-testid="gender"
              value={this.state.gender}
              onChange={this.handleGenderChange}
            >
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </label>
          <br />
          <label>
            Phone Number:
            <input
              data-testid="phoneNumber"
              type="text"
              value={this.state.phoneNumber}
              onChange={this.handlePhoneNumberChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              data-testid="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <br />
          <button data-testid="submit">Submit</button>
        </form>
        <h3>{this.state.error}</h3>
      </div>
    );
  }
}

export default App;
