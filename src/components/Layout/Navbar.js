import React, { useEffect, useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { foursquareLogo } from "../../images";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHandHoldingHeart } from "react-icons/fa";

const navLinkDetails = [
  {
    text: "HOME",
    url: "/",
  },
  {
    text: "EVENTS",
    url: "/events",
  },
  {
    text: "ABOUT",
    url: "/about",
  },
  {
    text: "REQUEST PRAYER",
    url: "/request-prayer",
  },
];

function NavbarMenu() {
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);

  return (
    <Navbar bg="bg-transparent" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={foursquareLogo}
            // style={{ width: "6vw" }}
            height={50}
            alt="fourSquare logo"
          />
          {/* <Link to="/about">test about</Link> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="text-white"
          style={{ fontFamily: "satoshi" }}
        >
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "350px" }}
            navbarScroll
          >
            {navLinkDetails?.map((link) => {
              return (
                <Link
                  key={link?.text}
                  to={link?.url}
                  className="nav-link"
                  style={{
                    color: currentUrl === link?.url ? "#ffa739" : "#fff",
                    objectFit: "cover",
                  }}
                >
                  {link?.text}
                </Link>
                // </Nav.Link>
              );
            })}
            <Link
              type="button"
              className="btn btn-outline-light rounded-4 me-4"
              to={"/giving"}
            >
              <FaHandHoldingHeart />
              &nbsp; Giving
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
