import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDownCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const Welcome = () => {
  return (
    <section className="text-white">
      <div className="row p-3 align-items-end" style={{ height: "510px" }}>
        <div className="col-6 col-lg-6 offset-1 mb-5">
          <h3 className="display-1 fst-italic" style={{ color: "#FFA739" }}>
            Children Church
          </h3>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
            adipiscing netus
          </p>
          <button className="btn btn-outline-dark rounded-5">
            Worship with us
          </button>
        </div>
        <div className="col-3 mb-5">
          <IconContext.Provider value={{ size: "30px" }}>
            <Link className="text-light nav-link float-end me-2" to={"/"}>
              <AiOutlineDownCircle />
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
