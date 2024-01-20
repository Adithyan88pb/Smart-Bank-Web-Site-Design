import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="main_Footedr">
      <Container>
        <Row>
          <Col sm="3">
            <div className="footer_logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU"
                alt=""
              />
              <p>fgggbdgd</p>
            </div>
          </Col>
          <Col sm="3">
            <li>
              <a href="" id="a_main">
                Company
              </a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Awards</a>
            </li>
          </Col>
          <Col sm="3">
            <li>
              <a href="" id="a_main">
                UsefulLinks
              </a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Business Loan</a>
            </li>
            <li>
              <a href="">Affliate Programs</a>
            </li>
          </Col>
          <Col sm="2">
            <li>
              <a href="" id="a_main">
                Subscribe
              </a>
            </li>
            <div className=" button_main ">
              <a href="#" class="  btn ">
                Enter your Email Address
              </a>
            </div>
            <div className=" button111 ">
              <a href="#" class="  btn ">
                Open Account
              </a>
            </div>
            {/* <p>Lorem ipsum dolor dfsdfffsdggxg.</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
