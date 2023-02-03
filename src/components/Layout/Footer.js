import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { foursquareLogo } from "../../images";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const backgroundFooter = {
    backgroundColor: "#20042D",
    fontFamily: "recia",
  };
  return (
    <footer style={backgroundFooter}>
      <Container className="">
        <Row className="mb-4 p-4">
          <Col sm="2">
            <div>
              <img
                className="img-fluid"
                src={foursquareLogo}
                alt="fourSquare logo"
              />
            </div>
          </Col>
          <Col sm="8">
            <div className="d-flex text-white flex-row gx-3">
              <div className="m-2 text-nowrap">GIVING</div>
              <div className="m-2 text-nowrap">PRAYER REQUEST</div>
              <div className="m-2 text-nowrap">GET INVOLVED</div>
            </div>
          </Col>
        </Row>
        <hr style={{ color: "white" }} className="m-4 me-0 ms-0 ps-0 pe-0" />
        <Row className="text-white p-5">
          <FooterDetails />
        </Row>
        <Row className="p-5">
          <p className="text-white text-center">
            © 2023 Foursquare Gospel Church Oniru. All Rights Reserved Terms of
            Use | Privacy Policy
          </p>
        </Row>
      </Container>
    </footer>
  );
};

const FooterDetails = () => {
  return (
    <>
      <Col sm={6} md={4} lg={3}>
        <h4>Ministries</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>Youth Church</li>
          <li>Intercessors Fellowship</li>
          <li>Family Church</li>
          <li>Ladies Fellowship</li>
          <li>Online Church</li>
        </ul>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <h4>About Us</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>Our Mission and Visions</li>
          <li>Our Weekly services</li>
          <li>Meet Our Pastors</li>
          <li>Locate Us</li>
        </ul>
        <h4>Media</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>Watch Sermons </li>
          <li>Listen to Podcast</li>
          <li>Tour Church Gallery</li>
        </ul>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <h4>Events</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>Upcoming Event</li>
        </ul>
        <h4>Get Involved</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>Volunteer</li>
          <li>Become a member</li>
          <li>Become a Worker</li>
        </ul>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <h4>Address</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>17 Yucca Drive, La Luz,nm, 88333 Lagos States</li>
        </ul>
        <h4>Contact</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>710-574-2044</li>
        </ul>
        <p>
          <BsEnvelopeFill /> &nbsp; foursquareoniru@gmail.com
        </p>
        <ul
          style={{ listStyleType: "none" }}
          className="d-flex flex-row ps-0 ms-0"
        >
          <li className="me-1">
            <a href="#">
              <FaYoutube />
            </a>
          </li>
          <li className="mx-1">
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="mx-1">
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="mx-1">
            <a href="#">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </Col>
    </>
  );
};

export default Footer;
