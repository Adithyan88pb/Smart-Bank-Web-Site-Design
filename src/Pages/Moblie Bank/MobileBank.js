import React from "react";
import about_image from "../../Assets/undraw_Transfer_money_re_6o1h-removebg-preview.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
const MobileBank = () => {
  return (
    <section className="about_setion">
      <Container>
        <Row>
          <Col lg="6">
            <div className="about_row_tow">
              <h6>Bank at your paim</h6>
              <h2>IMoblie Banking Availability</h2>
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

            <div className="d-flex justify-content-center ">
              <button
                className="me-4"
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  background: "transparent",
                  fontSize: "13px",
                }}
              >
                <FaGooglePlay /> Get in on Google Play
              </button>

              <button
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  background: "transparent",
                  fontSize: "13px",
                }}
              >
                <FaApple /> Download on Apple Store
              </button>
            </div>
          </Col>
          <Col lg="6">
            <div className="div_main_image">
              <img src={about_image} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MobileBank;
