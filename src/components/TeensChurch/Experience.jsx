import React from "react";
import {
  vectorBlock,
  experience1,
  experience2,
  experience3,
} from "../../images";
import { Link } from "react-router-dom";

const Experience = () => {
  const background_image = {
    backgroundImage: `url(${vectorBlock})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#2576D3",
  };

  const image_class = {
    height: "auto",
  };
  const experiencems1 = {
    height: "100%",
    width: "600px",
    zIndex: "5",
    marginBottom: "-230",
    marginRight: "-200px",
  };
  const experiencems2 = {
    width: "600px",
    zIndex: "20",
  };
  const experiencems3 = {
    height: "100%",
    width: "600px",
    zIndex: "5",
    marginLeft: "-230px",
    marginBottom: "-830px",
  };

  return (
    <section className="text-white" style={background_image} id="experience">
      <div className="row p-5">
        <div className="col-12 col-lg-6 p-2">
          <h4 className="display-5">
            Experience the power of faith and community at Teen Church
          </h4>
        </div>
        <div className="col-12 col-lg-6 p-2">
          <p>
            Welcome to the Teens Church! We offer a variety of programs and
            activities to help teenagers deepen their faith and connect with
            others. Our teens group includes Bible studies, teens-led worship,
            mission trips, and much more. Our experienced leaders are dedicated
            to providing a safe and fun environment for teens to explore their
            spirituality. Join us today and grow in your faith with other teens.
          </p>
          <Link
            to={"/member"}
            className="btn rounded-5 text-white"
            style={{ backgroundColor: "#FF8E00" }}
          >
            Become a member
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="hstack col-11 col-lg-8 mx-auto" style={image_class}>
          <div style={experiencems1} className="mb-0 pb-0">
            <img className="img-fluid" src={experience1} />
          </div>
          <div style={experiencems2}>
            <img className="img-fluid" src={experience2} />
          </div>
          <div style={experiencems3} className="mb-0 pb-0">
            <img className="img-fluid" src={experience3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
