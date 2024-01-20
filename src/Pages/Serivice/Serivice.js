import React from "react";
import "./Serivice.css";
import { Container, Row, Col } from "react-bootstrap";
import { IoCheckmark } from "react-icons/io5";
const Serivice = () => {
  return (
    <section className="serivice_section">
      <Container>
        <Row>
          <Col lg="12">
            <div className=" service_div_main text-center pt-5">
              <h6>Service Provided</h6>
              <h3>Manage our Cash Easily</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <div
              class="card  "
              id="serivice_card1 "
              style={{ border: "none", height: "300px" }}
            >
              <div class="card-body ">
                <h5 class="card-title text-center">Personal Banking</h5>
                <p class="card-text">
                  <IoCheckmark /> Online account opening and management
                </p>
                <p class="card-text">
                  <IoCheckmark />
                  Digital paymens and tranfer
                </p>
                <p class="card-text">
                  <IoCheckmark /> Savings and investment options
                </p>
                <p class="card-text">
                  <IoCheckmark /> Savings and investment options
                </p>
                <div className="text-center button ">
                  <a href="#" class="  btn ">
                    Open Account
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="4">
            <div
              class="card"
              id="serivice_card1 "
              style={{ border: "none", height: "300px" }}
            >
              <div class="card-body">
                <h5 class="card-title text-center">Personal Banking</h5>
                <p class="card-text">
                  <IoCheckmark /> Online account opening and management
                </p>
                <p class="card-text">
                  <IoCheckmark />
                  Digital paymens and tranfer
                </p>
                <p class="card-text">
                  <IoCheckmark /> Savings and investment options
                </p>
                <p class="card-text">
                  <IoCheckmark /> Savings and investment options
                </p>
                <div className="text-center button ">
                  <a href="#" class="  btn ">
                    Open Account
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="4">
            <div
              class="card"
              id="serivice_card1 "
              style={{ border: "none", height: "300px" }}
            >
              <div class="card-body">
                <h5 class="card-title text-center">Personal Banking</h5>
                <p class="card-text">
                  <IoCheckmark /> Online account opening and management
                </p>
                <p class="card-text">
                  <IoCheckmark />
                  Digital paymens and tranfer
                </p>
                <p class="card-text">
                  <IoCheckmark /> Savings and investment options
                </p>
                <p class="card-text">
                  <IoCheckmark /> Savings and investment options
                </p>
                <div className="text-center button ">
                  <a href="#" class="  btn ">
                    Open Account
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Serivice;
