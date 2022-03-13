import React, { Component, useState } from "react";
import "./Acount.css";
import backImg1 from "../Assets/backImg.jpg";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
class Acount extends Component {
  state = {
    patient: true,
    Doctor: false,
    Nurse: false,
    Student: false,
    LoginUserName: "",
    LoginPassword: "",
    SignupUserName: "",
    SignupFirstName: "",
    SignupLastName: "",
    SignupEmail: "",
    SignupPhone: "",
    SignupInstitute: "",
    SignupPassword: "",
    Signupver: "",
  };

  handleDropChoose1 = () => {
    this.setState({
      patient: true,
      Doctor: false,
      Nurse: false,
      Student: false,
    });
  };
  handleDropChoose2 = () => {
    this.setState({
      patient: false,
      Doctor: true,
      Nurse: false,
      Student: false,
    });
  };
  handleDropChoose3 = () => {
    this.setState({
      patient: false,
      Doctor: false,
      Nurse: true,
      Student: false,
    });
  };
  handleDropChoose4 = () => {
    this.setState({
      patient: false,
      Doctor: false,
      Nurse: false,
      Student: true,
    });
  };
  Login = () => {
    axios
      .post(`http://localhost:8080/auth/login`, {
        userName: this.state.LoginUserName,
        password: this.state.LoginPassword,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));
      });
  };
  SignUp = () => {
    var roleName;
    if (this.state.patient) {
      roleName = "Patient";
      axios
        .post(`http://localhost:8080/auth/signUser`, {
          userName: this.state.SignupUserName,
          email: this.state.SignupEmail,
          phoneNumber: this.state.SignupPhone,
          password: this.state.SignupPassword,
          role: roleName,
          fname: this.state.SignupFirstName,
          lname: this.state.SignupLastName,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    } else if (this.state.Doctor) {
      roleName = "Doctor";
      this.axiosPost(roleName);
    } else if (this.state.Nurse) {
      roleName = "Nurse";
      this.axiosPost(roleName);
    } else {
      roleName = "Student";
      this.axiosPost(roleName);
    }
  };
  axiosPost = (roleName) => {
    axios
      .post(`http://localhost:8080/auth/signEmployee`, {
        userName: this.state.SignupUserName,
        email: this.state.SignupEmail,
        phoneNumber: this.state.SignupPhone,
        password: this.state.SignupPassword,
        role: roleName,
        fname: this.state.SignupFirstName,
        lname: this.state.SignupLastName,
        Institution: this.state.SignupInstitute,
        verificationURL: this.state.Signupver,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  getInputValueLoginUserName = (event) => {
    this.setState({
      LoginUserName: event.target.value,
    });
  };
  getInputValueLoginPassword = (event) => {
    this.setState({
      LoginPassword: event.target.value,
    });
  };
  getInputValueSignupUserName = (event) => {
    this.setState({
      SignupUserName: event.target.value,
    });
  };
  getInputValueSignupFirstName = (event) => {
    this.setState({
      SignupFirstName: event.target.value,
    });
  };
  getInputValueSignupLastName = (event) => {
    this.setState({
      SignupLastName: event.target.value,
    });
  };
  getInputValueSignupEmail = (event) => {
    this.setState({
      SignupEmail: event.target.value,
    });
  };
  getInputValueSignupPhone = (event) => {
    this.setState({
      SignupPhone: event.target.value,
    });
  };
  getInputValueSignupInstitute = (event) => {
    this.setState({
      SignupInstitute: event.target.value,
    });
  };
  getInputValueSignupPassword = (event) => {
    this.setState({
      SignupPassword: event.target.value,
    });
  };
  getInputValueSignupver = (event) => {
    this.setState({
      Signupver: event.target.value,
    });
  };
  render() {
    return (
      <div className="ContainerrA">
        <div className="Logcontainer">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img className="img1" src={backImg1} alt=""></img>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                <form action="#">
                  <div className="input-boxes">
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={this.getInputValueLoginUserName}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={this.getInputValueLoginPassword}
                        required
                      />
                    </div>
                    <div className="button input-box">
                      <input
                        type="submit"
                        value="Submit"
                        onClick={this.Login}
                      />
                    </div>
                    <div className="text sign-up-text">
                      Don't have an account?{" "}
                      <label htmlFor="flip">Sigup now</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Signup</div>
                <form action="#">
                  <Dropdown className="mt-3">
                    <Dropdown.Toggle variant="danger" id="dropdown-basic">
                      Specialization
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={this.handleDropChoose1}>
                        Patient
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.handleDropChoose2}>
                        Doctor
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.handleDropChoose3}>
                        Nurse
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.handleDropChoose4}>
                        Student
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="input-boxes">
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your user name"
                        onChange={this.getInputValueSignupUserName}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        onChange={this.getInputValueSignupFirstName}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        onChange={this.getInputValueSignupLastName}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        onChange={this.getInputValueSignupEmail}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        onChange={this.getInputValueSignupPhone}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={this.getInputValueSignupPassword}
                        required
                      />
                    </div>

                    {!this.state.patient ? (
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder="Enter your institution"
                          onChange={this.getInputValueSignupInstitute}
                          required
                        />
                      </div>
                    ) : null}
                    {!this.state.patient ? (
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder="Enter your verfivication url"
                          onChange={this.getInputValueSignupver}
                          required
                        />
                      </div>
                    ) : null}

                    <div className="button input-box">
                      <input
                        type="submit"
                        value="Submit"
                        onClick={this.SignUp}
                      />
                    </div>
                    <div className="text sign-up-text">
                      Already have an account?{" "}
                      <label htmlFor="flip">Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Acount;
