import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Confirmation = () => {
  return (
    <section>
      <div className="row">
        <div className="col p-3">
          <Link
            className="float-start text-dark nav-link"
            to={"/giving-online"}
          >
            <IoIosArrowBack /> Back
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 p-2 p-lg-5 my-3 mx-auto">
          <div className="">
            <ul style={{ listStyleType: "none" }}>
              <li style={{ maxWidth: "100%" }}>
                <div className="row">
                  <div className="col-3">
                    <h5>Amount:</h5>
                  </div>
                  <div className="offset-1 offset-lg-2 col-8 col-lg-7">
                    <h3>NGN 133,990,000,000</h3>
                  </div>
                </div>
              </li>
              <li style={{ maxWidth: "100%" }}>
                <div className="row">
                  <div className="col-3">
                    <h5>Receiver’s Name:</h5>
                  </div>
                  <div className="offset-1 offset-lg-2 col-8 col-lg-7">
                    <p>Youth Church Account</p>
                  </div>
                </div>

                <span className="float-end"></span>
              </li>
              <li style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-3">
                    <h5>Church:</h5>
                  </div>
                  <div className="offset-1 offset-lg-2 col-8 col-lg-7">
                    <p>Youth Church</p>
                  </div>
                </div>
              </li>
              <li style={{ width: "100%" }}>
                <div className="row">
                  <div className="col-3">
                    <h5>Description:</h5>
                  </div>
                  <div className="offset-1 offset-lg-2 col-8 col-lg-7">
                    <p>
                      Donating to our church helps us to maintain and improve
                      our facilities, provide spiritual guidance and support to
                      our congregation, and reach out to those in need in our
                      community. Your contribution, no matter the size, is
                      invaluable and helps us to continue our mission. Thank you
                      for your generosity and suppor
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="row p-4">
              <Link
                to={"/giving-successful"}
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

export default Confirmation;
