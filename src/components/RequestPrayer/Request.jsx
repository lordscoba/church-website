import React from "react";
import { portrait2 } from "../../images";
import { Link } from "react-router-dom";

const Request = () => {
  return (
    <section className="my-5">
      <div className="row m-5">
        <div className="col-10 col-md-5">
          <h3 className="fst-italic">
            Schedule a prayer session with our pastors
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-11 col-md-10 col-lg-10 mx-auto">
          <form>
            <div className="row my-3 g-1 g-lg-4">
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-5">
                  Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>
                <input
                  style={{ height: "35px" }}
                  className="form-control"
                  placeholder="Shannon Turcotte"
                />
              </div>
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-5">Email Address:</label>
                <input
                  style={{ height: "35px" }}
                  className="form-control"
                  placeholder="ShannonTurcotte@yahoo.com"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12 d-lg-flex">
                <label className="me-lg-1 p-1">Available pastors:</label>
                <select className="form-select mb-3" style={{ height: "80px" }}>
                  <option value="1">Pastor. Carrie Frami</option>
                </select>
              </div>
            </div>
            <div className="row my-3 g-1 g-lg-4">
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-4 text-nowrap">
                  Pick a date: &nbsp;
                </label>
                <select style={{ height: "35px" }} className="form-select">
                  <option>Mon Nov 27 2023 </option>
                  <option></option>
                </select>
              </div>
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-3">Pick a time:</label>
                <select style={{ height: "35px" }} className="form-select">
                  <option>03:39:28 GMT+0100</option>
                  <option></option>
                </select>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12 d-lg-flex">
                <label className="text-nowrap p-1 me-lg-3">Your request:</label>
                <textarea className="form-control" rows="4">
                  Donating to our church helps us to maintain and improve our
                  facilities, provide spiritual guidance and support to our
                  congregation, and reach out to those in need in our community.
                  Your contribution, no matter the size, is invaluable and helps
                  us to continue our mission. Thank you for your generosity and
                  suppor
                </textarea>
              </div>
            </div>
            <div className="row my-3 g-1 g-lg-4">
              <Link
                to={"#"}
                type="button"
                className="btn"
                style={{ background: "#9747FF" }}
              >
                Submit Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Request;
