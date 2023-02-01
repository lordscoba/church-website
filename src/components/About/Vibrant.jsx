import React from "react";
import { doveIcon, churchIcon, eyeIcon } from "../../images/icons";

const Vibrant = () => {
  return (
    <section>
      <div className="row p-lg-5">
        <div className="col-12 col-lg-6 p-5">
          <p className="fst-italic display-4">
            We are a vibrant and welcoming community of believers who are
            committed to following Jesus Christ and sharing His love with
            others.
          </p>
        </div>
        <div className="col-12 col-lg-6 vstack px-5">
          <div className="p-1">
            <h3>
              <span>
                <img style={{ width: "30px" }} src={churchIcon} alt="" />
              </span>
              &nbsp; Our Church
            </h3>
            <p>
              Our church is a place where you will find acceptance,
              encouragement, and support no matter where you are on your
              spiritual journey. We offer a variety of worship services, Bible
              studies, and other programs to help you grow in your faith and
              connect with others.
            </p>
            <button
              type="button"
              className="btn btn-outline-dark rounded-5 float-start"
              style={{ fontFamily: "satoshi" }}
            >
              Read More...
            </button>
          </div>
          <div className="p-2">
            <h3>
              <span>
                <img style={{ width: "30px" }} src={doveIcon} alt="" />
              </span>
              &nbsp; Our Hope
            </h3>
            <p>
              Our church is a place where you will find acceptance,
              encouragement, and support no matter where you are on your
              spiritual journey. We offer a variety of worship services, Bible
              studies, and other programs to help you grow in your faith and
              connect with others.
            </p>
            <button
              type="button"
              className="btn btn-outline-dark rounded-5 float-start"
              style={{ fontFamily: "satoshi" }}
            >
              Read More...
            </button>
          </div>
          <div className="p-2">
            <h3>
              <span>
                <img style={{ width: "30px" }} src={eyeIcon} alt="" />
              </span>
              &nbsp; Our Vision
            </h3>
            <p>
              Our church is a place where you will find acceptance,
              encouragement, and support no matter where you are on your
              spiritual journey. We offer a variety of worship services, Bible
              studies, and other programs to help you grow in your faith and
              connect with others.
            </p>
            <button
              type="button"
              className="btn btn-outline-dark rounded-5 float-start"
              style={{ fontFamily: "satoshi" }}
            >
              Read More...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vibrant;
