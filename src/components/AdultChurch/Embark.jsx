import React from "react";
import { vectorBlock, playfulCouple } from "../../images";
import { Link } from "react-router-dom";

const Embark = () => {
  const background_image = {
    backgroundImage: `url(${vectorBlock})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#FF4F33",
  };

  return (
    <section style={background_image} id="embark">
      <div className="row text-white">
        <div className="col-10 col-lg-6 p-4 align-self-center">
          <h4>
            Embark on a journey of spiritual growth and connection at our Adult
            Church.
          </h4>
          <p>
            We are a community of believers coming together to worship, study
            the word of God, and support one another in our faith journey.
            <br />
            <br />
            Our services, Bible studies, and events provide opportunities for
            spiritual growth and fellowship. Join us and be a part of something
            bigger.
          </p>
          <div className="d-flex">
            <Link to={"/member"} className="btn btn-dark rounded-5 p-2 me-1">
              Become a member
            </Link>
            <Link
              to={"/request-prayer"}
              className="btn btn-outline-light rounded-5 p-2"
            >
              Request Prayer
            </Link>
          </div>
        </div>
        <div className="col text-right">
          <img
            style={{ width: "450px" }}
            src={playfulCouple}
            alt="playful couple"
            class=""
          />
        </div>
      </div>
    </section>
  );
};

export default Embark;
