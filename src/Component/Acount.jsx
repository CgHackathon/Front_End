import React, { Component, useState } from "react";
import "./Acount.css";
import backImg1 from "../Assets/backImg.jpg";
import { Dropdown } from "react-bootstrap";

class Acount extends Component {
  state = {
    patient: true,
    Doctor: false,
    Nurse: false,
    Student: false,
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
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Sumbit" />
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
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your lasr name"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    {!this.state.patient ? (
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder="Enter your institution"
                          required
                        />
                      </div>
                    ) : null}
                    {!this.state.patient ? (
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder="Enter your verfivication url"
                          required
                        />
                      </div>
                    ) : null}

                    <div className="button input-box">
                      <input type="submit" value="Sumbit" />
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
