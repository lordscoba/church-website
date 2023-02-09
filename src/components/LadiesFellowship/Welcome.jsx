import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDownCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const Welcome = () => {
  return (
    <section className="text-white">
      <div className="row p-3 align-items-end" style={{ height: "460px" }}>
        <div className="col-10 col-lg-7 offset-1 offset-lg-2 mb-5">
          <h3 className="display-1 fst-italic">Ladies Fellowship</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
            adipiscing netus
          </p>
          <button className="btn btn-outline-light rounded-5">
            Worship with us
          </button>
        </div>
        <div className="col-1 col-lg-3 mb-5">
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
