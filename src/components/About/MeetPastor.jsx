import React from "react";
import { pastor1, pastor2, pastor3, pastor4 } from "../../images";

const meetPastor = () => {
  const pastorStyling = {
    overflowX: "auto",
  };
  const pastorChildStyling = {
    display: "inline-block",
    float: "none",
    width: "340px",
  };
  return (
    <section>
      <div className="row m-5">
        <div className="col-12 col-lg-6">
          <h1>Meet our Pastor</h1>
        </div>
        <div className="col-12 col-lg-6">
          <p>
            We are thrilled to introduce our pastoral staff at XYZ Church. Our
            team of dedicated and passionate leaders are committed to serving
            our congregation and community with love and grace.
          </p>
        </div>
      </div>
      <div className="row flex-row flex-nowrap" style={pastorStyling}>
        <div style={pastorChildStyling}>
          <img
            className="img-fluid rounded-4"
            src={pastor1}
            alt=" first pastor"
          />
          <h3>Pastor. Carrie Frami</h3>
          <p>
            Our church is a place where you will find acceptance, encouragement,
            and support no matter where{" "}
          </p>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Know Pastor better
          </button>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5 float-end me-4"
            style={{ fontFamily: "satoshi" }}
          >
            Contact
          </button>
        </div>
        <div style={pastorChildStyling}>
          <img
            className="img-fluid rounded-4"
            src={pastor2}
            alt=" first pastor"
          />
          <h3>Pastor. Carrie Frami</h3>
          <p>
            Our church is a place where you will find acceptance, encouragement,
            and support no matter where{" "}
          </p>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Know Pastor better
          </button>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5 float-end me-4"
            style={{ fontFamily: "satoshi" }}
          >
            Contact
          </button>
        </div>
        <div style={pastorChildStyling}>
          <img
            className="img-fluid rounded-4"
            src={pastor3}
            alt=" first pastor"
          />
          <h3>Pastor. Carrie Frami</h3>
          <p>
            Our church is a place where you will find acceptance, encouragement,
            and support no matter where{" "}
          </p>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Know Pastor better
          </button>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5 float-end me-4"
            style={{ fontFamily: "satoshi" }}
          >
            Contact
          </button>
        </div>
        <div style={pastorChildStyling}>
          <img
            className="img-fluid rounded-4 w-50"
            src={pastor4}
            alt=" first pastor"
          />
          <h3>Pastor. Carrie Frami</h3>
          <p>
            Our church is a place where you will find acceptance, encouragement,
            and support no matter where{" "}
          </p>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Know Pastor better
          </button>
          <button
            type="button"
            className="btn btn-outline-dark rounded-5 float-end me-4"
            style={{ fontFamily: "satoshi" }}
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default meetPastor;
