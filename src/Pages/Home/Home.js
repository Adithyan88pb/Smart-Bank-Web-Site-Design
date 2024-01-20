import React from "react";
import "./Home.css";

import { Col, Container, Row } from "react-bootstrap";
import image from "../../Assets/undraw_Online_banking_re_kwqh-removebg-preview.png";
const Home = () => {
  return (
    <section className="home-section_main">
      <Container className="home_container-main">
        <Row className="home_row-main">
          <Col lg="6" style={{ paddingTop: "100px" }}>
            <div className="home_div-main">
              <h1>SmartBank-The Future of Banking at Your Fingertips</h1>
              <p>Experience seamiess online banking services which BankSmart</p>
              <button>Get in Touch</button>
            </div>
          </Col>
          <Col lg="6">
            <div>
              <img src={image} alt="Money Image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
