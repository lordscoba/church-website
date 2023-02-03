import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaPaypal } from "react-icons/fa";
import { IconContext } from "react-icons";

const Payment = () => {
  const linkStyle = {
    maxHeight: "100px",
    maxWidth: "auto",
    // backgroundColor: "#E7E7E7",
  };
  return (
    <section>
      <div className="row">
        <div className="col p-3">
          <Link className="float-start text-dark nav-link" to={"/giving"}>
            <IoIosArrowBack /> Back
          </Link>
        </div>
      </div>
      <div className="row p-4">
        <div className="col-10 col-lg-8 p-2 p-lg-5 mx-auto">
          <nav
            className="nav nav-pills nav-justified"
            id="pills-tab"
            role="tablist"
          >
            <button
              style={linkStyle}
              className="nav-link border border-dark border-1 p-1 rounded-0 text-dark active"
              id="pills-debit-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-debit"
              type="button"
              role="tab"
              aria-controls="pills-debit"
              aria-selected="true"
            >
              <div className="p-2">
                <IconContext.Provider value={{ size: "2.5em" }}>
                  <BsFillCreditCardFill />
                </IconContext.Provider>
                <h3 className="text-nowrap">Debit card</h3>
              </div>
            </button>
            <button
              style={linkStyle}
              className="nav-link border border-dark border-1 p-1 rounded-0 text-dark"
              id="pills-paypal-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-paypal"
              type="button"
              role="tab"
              aria-controls="pills-paypal"
              aria-selected="false"
            >
              <div className="p-2">
                <IconContext.Provider value={{ size: "2.5em" }}>
                  <FaPaypal />
                </IconContext.Provider>
                <h3 className="text-nowrap">Paypal</h3>
              </div>
            </button>
            <button
              style={linkStyle}
              className="nav-link border border-dark border-1 p-1 rounded-0 text-dark"
              id="pills-paylink-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-paylink"
              type="button"
              role="tab"
              aria-controls="pills-paylink"
              aria-selected="false"
            >
              <div className="p-2">
                <IconContext.Provider value={{ size: "2.5em" }}>
                  <BsFillCreditCardFill />
                </IconContext.Provider>
                <h3 className="text-nowrap">Paylink</h3>
              </div>
            </button>
          </nav>
          <div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-debit"
                role="tabpanel"
                aria-labelledby="pills-debit-tab"
                tabindex="0"
              >
                <PaymentCard />
              </div>
              <div
                className="tab-pane fade"
                id="pills-paypal"
                role="tabpanel"
                aria-labelledby="pills-paypal-tab"
                tabindex="0"
              >
                <PaymentCard />
              </div>
              <div
                className="tab-pane fade"
                id="pills-paylink"
                role="tabpanel"
                aria-labelledby="pills-paylink-tab"
                tabindex="0"
              >
                <PaymentCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PaymentCard = () => {
  return (
    <>
      <form className="my-3">
        <div className="row g-2">
          <div className="col-12 col-md-6 hstack">
            <label className="me-2">
              Amount: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="139,000,000"
            />
          </div>
          <div className="col-12 col-md-6 hstack">
            <label className="me-2 text-nowrap">Church: &nbsp; &nbsp;</label>
            <select className="form-select">
              <option value="1">Youth Church</option>
            </select>
          </div>
        </div>
        <div className="row g-2 mt-4">
          <div className="col-12 col-md-12 hstack">
            <label className="me-2 text-nowrap">Description:</label>
            <textarea className="form-control mb-4" rows="3" readOnly>
              Donating to our church helps us to maintain and improve our
              facilities, provide spiritual guidance and support to our
              congregation, and reach out to those in need in our community.
              Your contribution, no matter the size, is invaluable and helps us
              to continue our mission. Thank you for your generosity and suppor
            </textarea>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-12 col-md-6 hstack">
            <label className="me-2 text-nowrap">
              Card Number*: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="139,000,000"
            />
          </div>
          <div className="col-12 col-md-6 hstack">
            <label className="me-2 text-nowrap">
              Card Holder Name*: &nbsp; &nbsp; &nbsp; &nbsp;
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="139,000,000"
            />
          </div>
        </div>
        <div className="row g-2 mt-3">
          <div className="col-12 col-md-6 hstack">
            <label className="me-2 text-nowrap">
              Expiry date*: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </label>
            <select className="form-select me-1">
              <option value="1">Month</option>
            </select>
            <select className="form-select">
              <option value="1">Year</option>
            </select>
          </div>
          <div className="col-12 col-md-6 hstack">
            <label className="me-2 text-nowrap">
              CVC*: &nbsp; &nbsp; &nbsp; &nbsp;
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="139,000,000"
            />
          </div>
        </div>
        <div className="row my-4">
          <Link
            to={"/giving-details"}
            type="button"
            className="btn btn-lg text-white"
            style={{ backgroundColor: "#9747FF" }}
          >
            Confirm Payment
          </Link>
        </div>
      </form>
    </>
  );
};

export default Payment;
