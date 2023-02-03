import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section>
      <div className="row g-3 p-5 p-lg-5">
        <div className="col-12 col-lg-6">
          <h2 className="fst-italic">
            Experience the power of your generosity through the actions of God
          </h2>
        </div>
        <div className="col-12 col-lg-6">
          <p>
            Simple and secure. Give a single gift, or schedule recurring giving
            using your checking account, debit, or credit card.
          </p>
          <Link
            to={"/giving-online"}
            className=" btn rounded-4"
            style={{ backgroundColor: "#9747FF" }}
          >
            Give Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
