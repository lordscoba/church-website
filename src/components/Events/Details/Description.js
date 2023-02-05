import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ministerOne, ministerTwo, ministerThree } from "../../../images";

const Description = () => {
  return (
    <section>
      <div className="row mx-0 mx-lg-5">
        <div className="col p-3">
          <Link className="float-start text-dark nav-link" to={"/events"}>
            <IoIosArrowBack /> Back
          </Link>
        </div>
      </div>
      <DescriptionOne />
      <DescriptionTwo />
      <DescriptionThree />
      <DescriptionFour />
    </section>
  );
};

const DescriptionOne = () => {
  return (
    <div
      className="row mx-0 mx-lg-5 rounded-4 p-3 p-lg-5"
      style={{ backgroundColor: "#F0F0F0" }}
    >
      <div className="col-5 col-lg-6">
        <h3>Date:</h3>
        <p>Thursday, Jan 19, 2023 - Saturday, Jan 21, 2023</p>
        <h3>Time:</h3>
        <p>12:00PM - 5:00PM </p>
        <h3>Venue:</h3>
        <p>17 Yucca Drive, La Luz,nm, 88333 Lagos States</p>
      </div>
      <div className="col-7 col-lg-6">
        <h3>Contact info:</h3>
        <p>710-574-2044</p>
        <p>
          <BsEnvelopeFill /> &nbsp;foursquareoniru@gmail.com
        </p>
        <ul
          style={{ listStyleType: "none" }}
          className="d-flex flex-row ps-0 ms-0"
        >
          <li className="me-1">
            <a href="#">
              <IconContext.Provider value={{ color: "#000" }}>
                <div>
                  <FaYoutube />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="mx-1">
            <a href="#">
              <IconContext.Provider value={{ color: "#000" }}>
                <div>
                  <FaTwitter />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="mx-1">
            <a href="#">
              <IconContext.Provider value={{ color: "#000" }}>
                <div>
                  <FaInstagram />
                </div>
              </IconContext.Provider>
            </a>
          </li>
          <li className="mx-1">
            <a href="#">
              <IconContext.Provider value={{ color: "#000" }}>
                <div>
                  <FaFacebook />
                </div>
              </IconContext.Provider>
            </a>
          </li>
        </ul>
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-6">
            <Link to={"#"} className="btn btn-outline-dark rounded-5">
              Regsiter
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <Link to={"#"} className="btn btn-outline-dark rounded-5">
              Add to calendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DescriptionTwo = () => {
  return (
    <div className="row mx-0 mx-lg-5 p-2 py-5">
      <div className="col">
        <h3>Event Description</h3>
        <p>
          We are excited to announce our upcoming "Community Outreach Day"
          event! This is a special day where we will be reaching out to our
          local community and showing them the love of Christ through acts of
          service.
        </p>

        <p>
          The event will take place on [Date] from [Time] at [Location]. We will
          be meeting at the church and then dividing into teams to go out and
          serve in various ways such as:{" "}
        </p>

        <ul>
          <li>Helping with local park clean up </li>
          <li>Visiting and bringing meals to the elderly </li>
          <li>Helping with landscaping and beautification projects</li>
          <li>And more. </li>
        </ul>

        <p>
          Our goal is to make a positive impact in our community and show the
          love of Christ in a tangible way. All ages and skill levels are
          welcome to participate, so bring your family and friends!
        </p>

        <p>
          After the service projects, we will come back to the church for a BBQ
          lunch and time of fellowship. It's going to be a great day of serving
          others, building community,{" "}
        </p>

        <p>
          and making a difference in the lives of those around us. Please RSVP
          by [Date] to let us know you're coming and to reserve your spot. We
          can't wait to serve alongside you and make a difference in our
          community!
        </p>
      </div>
    </div>
  );
};

const DescriptionThree = () => {
  return (
    <div className="row g-2 mx-1 mx-lg-5 mb-4">
      <h3>Ministering</h3>
      <div className="col-4">
        <img
          className="img-fluid rounded-3 h-75 w-100"
          src={ministerOne}
          alt="minister"
        />
        <p className="text-center mt-3">Amanda Cartwright</p>
      </div>
      <div className="col-4">
        <img
          className="img-fluid rounded-3 h-75 w-100"
          src={ministerTwo}
          alt="minister"
        />
        <p className="text-center mt-3">Ms. Billie Langosh</p>
      </div>
      <div className="col-4">
        <img
          className="img-fluid rounded-3 h-75 w-100"
          src={ministerThree}
          alt="minister"
        />
        <p className="text-center mt-3">Laurie Luettgen</p>
      </div>
    </div>
  );
};

const DescriptionFour = () => {
  return (
    <div className="row mx-0 mx-lg-5 mb-5">
      <div className="col">
        <h3>Requirments</h3>
        <p className="my-4">
          Don't forget to wear comfortable clothes and closed-toe shoes, bring a
          hat, sunscreen and a refillable water bottle. For more information or
          if you have any questions, please contact [Name and contact
          information of the event organizer].
        </p>
        <div className="mb-5">
          <Link to={"#"} className="btn btn-outline-dark rounded-5 text-nowrap">
            Register for event
          </Link>
          <Link
            to={"#"}
            className="btn btn-outline-dark rounded-5 text-nowrap ms-3"
          >
            Add to calendar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
