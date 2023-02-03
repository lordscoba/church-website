import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDownCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const Welcome = () => {
  return (
    <section className="text-white">
      <div className="row p-1 align-items-end pb-5" style={{ height: "450px" }}>
        <div className="col-7 offset-1 d-flex">
          <div>
            <button
              type="button"
              className="btn btn-danger rounded-2 text-nowrap"
              style={{ fontFamily: "satoshi", fontSize: "12px" }}
            >
              Watch Sermons
            </button>
          </div>
          <div className="ms-3">
            <button
              type="button"
              className="btn btn-outline-light rounded-2 text-nowrap"
              style={{ fontFamily: "satoshi", fontSize: "12px" }}
            >
              View More Sermons
            </button>
          </div>
        </div>
        <div className="col-4">
          <IconContext.Provider value={{ size: "30px" }}>
            <Link className="text-light nav-link float-end me-5" to={"/"}>
              <AiOutlineDownCircle />
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
