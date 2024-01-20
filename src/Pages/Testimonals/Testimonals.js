import React from "react";
import "./Testimonals.css";
import { Col, Container, Row } from "react-bootstrap";
import Testimonals_image from "../../Assets/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space.jpg";
const Testimonals = () => {
  return (
    <section className="Testimonals_section">
      <Container>
        <Row>
          <div
            className="card mb-3 "
            style={{ maxWidth: "540px;", border: "none" }}
          >
            <div className="row g-0 ">
              <div className="col-md-5">
                <img
                  src={Testimonals_image}
                  className="img-fluid rounded-start"
                  alt="image"
                />
                <h6>Marry jacquers</h6>
                <p>United Kindom</p>
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <h6>Why SmartBank</h6>
                  <h4 className="card-title">Don't Take Our Word,Take Th </h4>
                  <p className="card-text ">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a wider card with supporting text
                    below as a natural lead-in to additional content. This
                    content is a little bit longer.This is a wider card with
                    supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonals;
