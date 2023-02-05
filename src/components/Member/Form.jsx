import React from "react";

const Form = () => {
  return (
    <section className="mb-5">
      <div className="row p-4 p-lg-5">
        <div className="col-10 col-lg-7">
          <h1 className="float-start fst-italic fw-light">
            Join our congregation and become a part of our spiritual community
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-11 col-lg-8 mx-auto">
          <form>
            <div className="row my-3 g-1 g-lg-4">
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-5">Name:</label>
                <input
                  className="form-control"
                  placeholder="Katrina Emmerich"
                />
              </div>
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-5">Church:</label>
                <select className="form-select">
                  <option>Youth Church</option>
                  <option></option>
                </select>
              </div>
            </div>
            <div className="row my-3 g-1 g-lg-4">
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-5 text-nowrap">
                  Phone Number:
                </label>
                <input className="form-control" placeholder="643-747-9511" />
              </div>
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-5">Email:</label>
                <input
                  className="form-control"
                  placeholder="Shannonturcotte@gmail.com"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12 d-lg-flex">
                <label className="text-nowrap me-lg-5">Home Address:</label>
                <textarea className="form-control" rows="3">
                  88,Ojuelegba Road,Surulere
                </textarea>
              </div>
            </div>
            <div className="row my-3 g-1 g-lg-4">
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-5">Occupation:</label>
                <select className="form-select">
                  <option>Civil Servant</option>
                  <option></option>
                </select>
              </div>
              <div className="col-6 d-lg-flex">
                <label className="form-label me-lg-5 text-nowrap">
                  Age group:
                </label>
                <select className="form-select">
                  <option>20 - 30 Years</option>
                  <option></option>
                </select>
              </div>
            </div>
            <div className="row my-3 g-1 g-lg-4">
              <button className="btn" style={{ background: "#9747FF" }}>
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
