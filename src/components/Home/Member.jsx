import React from "react";
import { Link } from "react-router-dom";

export const Members = () => {
  return (
    <section className="m-1">
      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <div className="p-4" style={{ height: "11.5rem" }}>
            <div
              className="text-white rounded-4 p-4"
              style={{ backgroundColor: "#474747" }}
            >
              <p className="display-3">I would love to:</p>
            </div>
          </div>
          <div className="p-3">
            <div className="d-flex justify-content-between p-2">
              <h3>Volunteer</h3>
              <Link
                to={"/volunteer"}
                type="button"
                className="btn btn-outline-dark rounded-5"
                style={{
                  fontFamily: "satoshi",
                  fontSize: "13px",
                  height: "40px",
                }}
              >
                Start here
              </Link>
            </div>
            <p className="p-2 w-75">
              Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
              adipiscing
            </p>
            <hr />
          </div>
          <div className="p-3">
            <div className="d-flex justify-content-between p-2">
              <h3>Give to the church</h3>
              <Link
                to={"/giving"}
                // type="button"
                className="btn btn-outline-dark rounded-5"
                style={{
                  fontFamily: "satoshi",
                  fontSize: "13px",
                  height: "40px",
                }}
              >
                Give
              </Link>
            </div>
            <p className="p-2 w-75">
              Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
              adipiscing
            </p>
            <hr />
          </div>
          <div className="p-3">
            <div className="d-flex justify-content-between p-2">
              <h3>Support church project</h3>
              <Link
                to={"/giving"}
                type="button"
                className="btn btn-outline-dark rounded-5"
                style={{
                  fontFamily: "satoshi",
                  fontSize: "13px",
                  height: "40px",
                }}
              >
                Support
              </Link>
            </div>
            <p className="p-2 w-75">
              Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
              adipiscing
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="p-3">
            <div className="d-flex justify-content-between p-2">
              <h3>Become a member</h3>
              <Link
                to={"/member"}
                type="button"
                className="btn btn-outline-dark rounded-5 text-nowrap"
                style={{
                  fontFamily: "satoshi",
                  fontSize: "13px",
                  height: "40px",
                }}
              >
                Start here
              </Link>
            </div>
            <p className="p-2 w-75">
              Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
              adipiscing
            </p>
            <hr />
          </div>
          <div className="p-3">
            <div className="d-flex justify-content-between p-2">
              <h3>View church photo gallery</h3>
              <Link
                to={"/youth-gallery"}
                type="button"
                className="btn btn-outline-dark rounded-5 text-nowrap"
                style={{
                  fontFamily: "satoshi",
                  fontSize: "13px",
                  height: "40px",
                }}
              >
                Check Photos
              </Link>
            </div>
            <p className="p-2 w-75">
              Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
              adipiscing
            </p>
            <hr />
          </div>
          <div className="p-3">
            <div className="d-flex justify-content-between p-2">
              <h3>Request prayer </h3>
              <Link
                to={"/request-prayer "}
                type="button"
                className="btn btn-outline-dark rounded-5 text-nowrap"
                style={{
                  fontFamily: "satoshi",
                  fontSize: "13px",
                  height: "40px",
                }}
              >
                Send Request
              </Link>
            </div>
            <p className="p-2 w-75">
              Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
              adipiscing
            </p>
            <hr />
          </div>
          <div className="p-3">
            <div className="d-flex justify-content-between p-2">
              <h3>Know about the church</h3>
              <Link
                to={"/about"}
                type="button"
                className="btn btn-outline-dark rounded-5 text-nowrap"
                style={{
                  fontFamily: "satoshi",
                  fontSize: "13px",
                  height: "40px",
                }}
              >
                About Us
              </Link>
            </div>
            <p className="p-2 w-75">
              Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
              adipiscing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
