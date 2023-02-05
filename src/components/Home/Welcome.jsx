import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Slide, Zoom } from "react-awesome-reveal";

const Welcome = () => {
  return (
    <section className="text-white">
      <Container>
        <Row style={{ height: "500px" }} className="p-3 align-items-end">
          <Col className="col-9 col-lg-6">
            <div className="">
              <Slide cascade>
                <div
                  className="display-3 fst-italic lh-1 mb-4"
                  style={{ fontFamily: "recia" }}
                >
                  Welcome to <br />
                  Foursquare Gospel <br />
                  Church Oniru
                </div>
              </Slide>

              <Slide direction="right">
                <div className="lh-1 mb-4" style={{ fontFamily: "recia" }}>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </Slide>
              <Zoom>
                <button
                  type="button"
                  className="btn btn-outline-light rounded-4"
                >
                  Worship With Us
                </button>
              </Zoom>
              <br />
            </div>
            <ul className="hstack mt-4" style={{ fontSize: "8px" }}>
              <li className="mx-2">Welcome</li>
              <li className="mx-2">Youth</li>
              <li className="mx-2">Intercessor</li>
              <li className="mx-2">Family</li>
              <li className="mx-2 text-nowrap">Ladies Fellowship</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Welcome;
