import React from "react";
import { portrait2 } from "../../images";

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
        <div className="col-10 col-md-10 offset-1">
          <form>
            <div className="row g-2">
              <div className="col-12 col-md-6 hstack">
                <label className="me-2">
                  Name: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shannon Turcotte"
                />
              </div>
              <div className="col-12 col-md-6 hstack">
                <label className="me-2 text-nowrap">
                  Email address: &nbsp; &nbsp;
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ShannonTurcotte@yahoo.com"
                />
              </div>
            </div>
            <div className="row g-2 mt-4">
              <div className="col-12 col-md-12 hstack">
                <label className="me-2 text-nowrap">Available pastors:</label>
                <select
                  className="form-select form-select-lg mb-3"
                  style={{ height: "100px" }}
                >
                  <option value="1">Pastor. Carrie Frami</option>
                </select>
              </div>
            </div>
            <div className="row g-2">
              <div className="col-12 col-md-6 hstack">
                <label className="me-2 text-nowrap">
                  Pick a date: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>
                <select className="form-select">
                  <option value="1">Mon Nov 27 2023 </option>
                </select>
              </div>
              <div className="col-12 col-md-6 hstack">
                <label className="me-2 text-nowrap">
                  Pick a time: &nbsp; &nbsp; &nbsp; &nbsp;
                </label>
                <select className="form-select">
                  <option value="1">03:39:28 GMT+0100</option>
                </select>
              </div>
            </div>
            <div className="row g-2 mt-4">
              <div className="col-12 col-md-12 hstack">
                <label className="me-2 text-nowrap">
                  Your Request: &nbsp; &nbsp; &nbsp;
                </label>
                <textarea className="form-control" rows="6"></textarea>
              </div>
            </div>
            <div className="row my-4">
              <button type="button" className="btn btn-lg btn-success">
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Request;
