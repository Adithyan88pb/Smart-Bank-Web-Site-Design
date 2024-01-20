import React from "react";
import "./Features.css";
import { Col, Container, Row } from "reactstrap";
import { BiLogIn } from "react-icons/bi";
import login_img from "../../Assets/enter.png";
import tool from "../../Assets/tool.png";
import Funds from "../../Assets/money.png";
import Financial from "../../Assets/financial.png";
const Features = () => {
  return (
    <section className="Features_section">
      <Container>
        <Row>
          <Col lg="12">
            <div className="text-center pt-5 pb-2">
              <h5 className="features-title">Key features</h5>
            </div>
            <h3 className="text-center pb-3">Access To Secure Banking</h3>
          </Col>
        </Row>

        <Row>
          <Col sm="3">
            <div class="card  " id="serivice_card1 " style={{ border: "none" }}>
              <div class="card-body ">
                <h6 class="card-title text-center">Secure Login</h6>
                <div className="text-center image">
                  <img src={login_img} alt="" />
                </div>
                <div className="text-center  ">
                  Lorem ipsum, dolor sit amet consectetur adipisicin
                </div>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <div class="card  " id="serivice_card1 " style={{ border: "none" }}>
              <div class="card-body ">
                <h6 class="card-title text-center">Budgeting Tools</h6>
                <div className="text-center image">
                  <img src={tool} alt="" />
                </div>
                <div className="text-center  ">
                  Lorem ipsum, dolor sit amet consectetur adipisicin
                </div>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <div class="card  " id="serivice_card1 " style={{ border: "none" }}>
              <div class="card-body ">
                <h6 class="card-title text-center">Funds Transfer</h6>
                <div className="text-center image">
                  <img src={Funds} alt="" />
                </div>
                <div className="text-center  ">
                  Lorem ipsum, dolor sit amet consectetur adipisicin
                </div>
              </div>
            </div>
          </Col>
          <Col sm="3">
            <div class="card  " id="serivice_card1 " style={{ border: "none" }}>
              <div class="card-body ">
                <h6 class="card-title text-center">Financial Tracking</h6>
                <div className="text-center image">
                  <img src={Financial} alt="" />
                </div>
                <div className="text-center  ">
                  Lorem ipsum, dolor sit amet consectetur adipisicin
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
