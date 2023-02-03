import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { tick } from "../../../images/icons";

const Successful = () => {
  return (
    <section>
      <div className="col p-3">
        <Link className="float-start text-dark nav-link" to={"/giving-details"}>
          <IoIosArrowBack /> Back
        </Link>
      </div>
      <div className="row">
        <div className="col-10 col-md-8 p-5 my-3 mx-auto">
          <div className="vstack">
            <div className="mx-auto my-3">
              <img src={tick} alt="success tick" style={{ width: "80px" }} />
            </div>
            <h4 className="text-center my-3 fst-italic">Successful</h4>
            <p className="text-center my-3">
              Your contribution, no matter the size, is invaluable and helps us
              to continue our mission. Thank you for your generosity and support
            </p>
            <div className="row my-3">
              <Link
                to={"/giving"}
                type="button"
                className="btn btn-lg text-white"
                style={{ backgroundColor: "#9747FF" }}
              >
                Make Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Successful;
