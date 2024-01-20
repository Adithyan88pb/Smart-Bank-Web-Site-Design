import React from "react";
import "./Questions.css";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";
const Questions = () => {
  return (
    <section className="Questions_Section">
      <Container>
        <Row>
          <Col lg="12">
            <div className="text-center pt-5 pb-2">
              <h5 className="features-title">Frequently Asked Questions</h5>
            </div>
            <h3 className="text-center pb-3">
              if You HAve Questions, We HAve An Answer
            </h3>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center">
          <Col sm="9">
            <Accordion defaultActiveKey="28">
              <div className="pb-3">
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    This is a wider card with supporting text below
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="pb-3">
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    This is a wider card with supporting text below{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="pb-3">
                <Accordion.Item eventKey="25">
                  <Accordion.Header>
                    This is a wider card with supporting text below
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="pb-3">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    This is a wider card with supporting text below
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </Accordion.Body>
                </Accordion.Item>
              </div>
              <div className="pb-3">
                <Accordion.Item eventKey="22">
                  <Accordion.Header>
                    This is a wider card with supporting text below
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Questions;
