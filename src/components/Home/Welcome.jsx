import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Welcome = () => {
  // const welcomeRef = useRef(null);

  // useEffect(() => {
  //   const item = document.querySelector(".welcome");

  //   console.log(item.clientTop);
  // }, []);
  return (
    <section className="welcome">
      <Container>
        <Row>
          <Col className="p-5">
            <div className="mb-5">
              <div
                className="fs-1 text-white fst-italic lh-1 mb-5"
                style={{ fontFamily: "recia" }}
              >
                Welcome to <br />
                Foursquare Gospel <br />
                Church Oniru
              </div>
              <div
                className="lh-1 mb-5 text-white"
                style={{ fontFamily: "recia" }}
              >
                Lorem ipsum dolor sit amet, consectetur
                <br />
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <button type="button" className="btn btn-outline-light rounded-4">
                Worship With Us
              </button>
              <br />
            </div>
            <ul
              className="d-inline-flex flex-row text-white ms-0 mt-5"
              style={{ fontSize: "8px" }}
            >
              <li className="mx-2">Welcome</li>
              <li className="mx-2">Youth</li>
              <li className="mx-2">Intercessor</li>
              <li className="mx-2">Family</li>
              <li className="mx-2">Ladies Fellowship</li>
            </ul>
          </Col>
          {/* <Col></Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Welcome;
