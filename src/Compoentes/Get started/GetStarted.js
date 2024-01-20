import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image_image from "../../Assets/undraw_Bitcoin_re_urgq-removebg-preview.png";
import "./Get started.css";
const GetStarted = () => {
  return (
    <section className="GetStarted_section">
      <Container>
        <Row>
          <div class="GetStarted_section_div">
            <div class="group">
              <table>
                <tr>
                  <td class="item-details">
                    <h4 class="item-title">Ready To Get Started ?</h4>
                    <span class="item-size">
                      Lorem ipsum dolor sit amet consectetur adipi
                      <br /> Aspernatur,fraesentium?
                    </span>

                    <div className=" button11 ">
                      <a href="#" class="  btn ">
                        Open Account
                      </a>
                    </div>
                  </td>
                  <td class="item-img">
                    <img src={image_image} alt="" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default GetStarted;
