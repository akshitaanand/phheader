import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";

import { ToastsContainer, ToastsStore } from "react-toasts";
import { MDBBtn } from "mdbreact";
import logo from "./logo.png";

import "./App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      showModal1: false,
      showModal2: false,
      showModal3: false,
      email: "",
      password: "",
      modalIsOpen: false
    };
    this.changeState1 = this.changeState1.bind(this);
    this.changeState2 = this.changeState2.bind(this);
    this.changeState3 = this.changeState3.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  changeState1() {
    this.setState({
      showModal1: !this.state.showModal1
    });
    this.setState({
      showModal2: false
    });
  }

  changeState2() {
    this.setState({
      showModal2: !this.state.showModal2
    });
    this.setState({
      showModal1: false
    });
  }

  onChange1(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  changeState() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  changeState3() {
    this.getUserNotificationStatus();
    this.setState({
      showModal3: !this.state.showModal3
    });
  }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-light bg-light static-top"
          style={{ padding: "0%" }}
        >
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#12517A",
              color: "white",
              height: "60px"
            }}
          >
            <a>
              <img src={logo} style={{ width: "160px" }} />
            </a>
            <Form>
              <MDBBtn>
                <a
                  onClick={this.changeState1}
                  show={this.state.isLogin}
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Login
                </a>
              </MDBBtn>
              <Modal
                style={{ zIndex: 50000 }}
                show={this.state.showModal1}
                onHide={this.changeState1}
              >
                <Form className="button" style={{ padding: "20px" }}>
                  <Form.Group controlId="Header">
                    <h1 style={{ textAlign: "center" }}>Login</h1>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{ fontSize: 18 }}>
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{ fontSize: 18 }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                    />
                  </Form.Group>
                  <Button
                    block
                    style={{ float: "right" }}
                    variant="secondary"
                    type="Button"
                    onClick={this.sendLoginData}
                  >
                    Login
                  </Button>
                </Form>
              </Modal>
              &nbsp;&nbsp;&nbsp;
              <MDBBtn>
                <a
                  onClick={this.changeState2}
                  show={this.state.isLogin}
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Sign Up
                </a>
              </MDBBtn>
              <Modal
                style={{ zIndex: 50000 }}
                show={this.state.showModal2}
                onHide={this.changeState2}
              >
                <Form className="button" style={{ padding: "20px" }}>
                  <Form.Group controlId="Header">
                    <h1 style={{ textAlign: "center" }}>Sign Up</h1>
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{ fontSize: 18 }}>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={this.state.newEmail}
                        name="newEmail"
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label style={{ fontSize: 18 }}>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={this.state.newPassword}
                        name="newPassword"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridFirstName">
                    <Form.Label style={{ fontSize: 18 }}>First Name</Form.Label>
                    <Form.Control
                      placeholder=""
                      value={this.state.newFirstName}
                      name="newFirstName"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridLastName">
                    <Form.Label style={{ fontSize: 18 }}>Last Name</Form.Label>
                    <Form.Control
                      placeholder=""
                      value={this.state.newLastName}
                      name="newLastName"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridContact">
                      <Form.Label style={{ fontSize: 18 }}>
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        value={this.state.newContact}
                        name="newContact"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Button
                    block
                    style={{ float: "right" }}
                    variant="secondary"
                    type="Button"
                    onClick={this.createNewUser}
                  >
                    Sign Up
                  </Button>
                </Form>
              </Modal>
            </Form>
          </div>
        </nav>
        <ToastsContainer store={ToastsStore} />
      </div>
    );
  }
}

export default Header;
