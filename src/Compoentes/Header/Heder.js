import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Heder = () => {
  return (
    <div className="navbar_main">
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="#">
            <h4>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU"
                alt=""
              />
              Smart Bank
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" id="nav_ul">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" id="nav_ul">
                About
              </Nav.Link>
              <Nav.Link href="#action1" id="nav_ul">
                Online Banking
              </Nav.Link>
              <Nav.Link href="#action2" id="nav_ul">
                Contact
              </Nav.Link>
            </Nav>

            <Button id="button">Open Account</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Heder;
