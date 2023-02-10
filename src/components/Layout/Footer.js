import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { foursquareLogo } from "../../images";
import { footer3, footer4, footer5 } from "../../images/icons";
import Container from "react-bootstrap/Container";
import { IconContext } from "react-icons";
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
      {/* <Container> */}
      <div className="row text-white p-4">
        <div className="col-12 col-md-4 col-lg-4 mb-4 mb-md-0">
          <div className="">
            <Link to={"/"}>
              <img
                className="img-fluid"
                src={foursquareLogo}
                alt="fourSquare logo"
              />
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-8 ms-auto">
          <div className="hstack g-3  float-start float-lg-end">
            <div className="text-nowrap mx-1">
              <Link className="nav-link" to={"/giving"}>
                <p style={{ fontSize: "12px" }}>
                  <img
                    style={{ maxWidth: "30px" }}
                    src={footer5}
                    alt="footerImage"
                  />{" "}
                  &nbsp; GIVING
                </p>
              </Link>
            </div>
            <div className="text-nowrap mx-1">
              <Link className="nav-link" to={"/request-prayer"}>
                <p style={{ fontSize: "12px" }}>
                  <img
                    tyle={{ maxWidth: "25px" }}
                    src={footer4}
                    alt="footerImage"
                  />{" "}
                  &nbsp;PRAYER REQUEST
                </p>
              </Link>
            </div>
            <div className="text-nowrap mx-1">
              <Link className="nav-link" to={"/member"}>
                <p style={{ fontSize: "12px" }}>
                  <img
                    tyle={{ maxWidth: "25px" }}
                    src={footer3}
                    alt="footerImage"
                  />{" "}
                  &nbsp;GET INVOLVED
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
      {/* </Container> */}
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
          <li>
            <Link className="nav-link" to={"/youth-church"}>
              Youth Church
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/intercessors-church"}>
              Intercessors Fellowship
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/family-church"}>
              Family Church{" "}
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/ladies-fellowship"}>
              Ladies Fellowship
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/fellowship"}>
              Online Church
            </Link>
          </li>
        </ul>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <h4>About Us</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>
            <Link className="nav-link" to={"/about#vibrant"}>
              Our Mission and Visions
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/about"}>
              Our Weekly services
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/about"}>
              Meet Our Pastors
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/about"}>
              Locate Us
            </Link>
          </li>
        </ul>
        <h4>Media</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>
            <Link className="nav-link" to={"/video"}>
              Watch Sermons
            </Link>{" "}
          </li>
          <li>
            <Link className="nav-link" to={"/video"}>
              Listen to Podcast
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/youth-gallery"}>
              Tour Church Gallery
            </Link>
          </li>
        </ul>
      </Col>
      <Col sm={6} md={4} lg={3}>
        <h4>Events</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>
            <Link className="nav-link" to={"/events"}>
              Upcoming Event
            </Link>
          </li>
        </ul>
        <h4>Get Involved</h4>
        <hr style={{ color: "white" }} className="mt-0 me-5 ms-0 ps-0" />
        <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
          <li>
            <Link className="nav-link" to={"/volunteer"}>
              Volunteer
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/member"}>
              Become a member
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/member"}>
              Become a Worker
            </Link>
          </li>
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
              <IconContext.Provider value={{ color: "white" }}>
                <div>
                  <FaYoutube />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="mx-1">
            <a href="#">
              <IconContext.Provider value={{ color: "white" }}>
                <div>
                  <FaTwitter />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="mx-1">
            <a href="#">
              <IconContext.Provider value={{ color: "white" }}>
                <div>
                  <FaInstagram />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="mx-1">
            <a href="#">
              <IconContext.Provider value={{ color: "white" }}>
                <div>
                  <FaFacebook />
                </div>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </Col>
    </>
  );
};

export default Footer;
