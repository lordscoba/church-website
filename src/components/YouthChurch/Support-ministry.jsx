import React from "react";
import { handLove } from "../../images";

const SupportMinistry = () => {
  return (
    <section>
      <div className="row align-items-end mt-5">
        <div className="col">
          <img className="img-fluid w-100" src={handLove} alt="hand of love" />
        </div>
        <div className="col p-3 align-self-center">
          <h4>Support Our Ministry</h4>
          <p style={{ fontSize: "10px" }} className="d-block d-lg-none w-75">
            Your support will make a significant impact in the lives of the
            young people in our community. We deeply appreciate your generosity
            and support. Every contribution, big or small, will make a
            difference.
          </p>
          <p className="d-none d-lg-block w-75">
            Your support will make a significant impact in the lives of the
            young people in our community. We deeply appreciate your generosity
            and support. Every contribution, big or small, will make a
            difference.
          </p>
          <button className="btn btn-outline-dark rounded-5">
            Give to our church
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportMinistry;
