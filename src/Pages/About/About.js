import React from "react";
import "./Aboutg.css";
import about_image from "../../Assets/undraw_Mobile_pay_re_sjb8-removebg-preview.png";
import { IoIosCheckmarkCircle } from  "react-icons/io";
import { Container, Row, Col } from  "react-bootstrap";
const About = () => {
  return (
    <section className="about_setion">
      <Container>
        <Row>
          <Col lg="6">
            <div className="div_main_image">
              <img src={about_image} alt="" />
            </div>
          </Col>
          <Col lg="6">
            <div className="about_row_tow">
              <h6>Why SmartBank</h6>
              <h2>
                Innovative Banking <br /> Solutions To Customer
              </h2>
              <p>
                <IoIosCheckmarkCircle className="icon" />
                Lorem ipsum dolor sit amet,br consectetur adipisicing elit.
              </p>
              <p>
                <IoIosCheckmarkCircle className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                <IoIosCheckmarkCircle className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                <IoIosCheckmarkCircle className="icon" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
