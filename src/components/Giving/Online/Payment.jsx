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
        <div className="col-12 col-lg-8 p-2 p-lg-5 mx-auto">
          <nav
            className="nav nav-pills nav-justified d-flex"
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
      <form>
        <div className="row my-3 g-1 g-lg-4">
          <div className="col-6 d-lg-flex">
            <label className="form-label me-lg-5">Amount:</label>
            <input className="form-control" placeholder="139,000,000" />
          </div>
          <div className="col-6 d-lg-flex">
            <label className="form-label me-lg-5">Church:</label>
            <select className="form-select">
              <option value="1">Youth Church</option>
              <option></option>
            </select>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 d-lg-flex">
            <label className="text-nowrap me-lg-3">Description:</label>
            <textarea className="form-control" rows="4">
              Donating to our church helps us to maintain and improve our
              facilities, provide spiritual guidance and support to our
              congregation, and reach out to those in need in our community.
              Your contribution, no matter the size, is invaluable and helps us
              to continue our mission. Thank you for your generosity and suppor
            </textarea>
          </div>
        </div>
        <div className="row my-3 g-1 g-lg-4">
          <div className="col-6 d-lg-flex">
            <label className="form-label me-lg-3 text-nowrap">
              Card Number*:
            </label>
            <input
              style={{ height: "35px" }}
              className="form-control"
              placeholder="702-962-5210"
            />
          </div>
          <div className="col-6 d-lg-flex">
            <label className="form-label me-lg-3">Card Holder Name*:</label>
            <input
              style={{ height: "35px" }}
              className="form-control"
              placeholder="Angelica Erdman"
            />
          </div>
        </div>
        <div className="row my-3 g-1 g-lg-4">
          <div className="col-6 d-lg-flex">
            <label className="form-label me-lg-3">Expiry date*:</label>
            <select style={{ height: "35px" }} className="form-select">
              <option>Month</option>
              <option></option>
            </select>
            <select style={{ height: "35px" }} className="form-select">
              <option>Year</option>
              <option></option>
            </select>
          </div>
          <div className="col-6 d-lg-flex">
            <label className="form-label me-lg-5 text-nowrap">CVC*:</label>
            <input
              style={{ height: "35px" }}
              className="form-control"
              placeholder="702"
            />
          </div>
        </div>
        <div className="row my-3 g-1 g-lg-4">
          <Link
            to={"/giving-details"}
            type="button"
            className="btn"
            style={{ background: "#9747FF" }}
          >
            Confirm Payment
          </Link>
        </div>
      </form>
    </>
  );
};

export default Payment;
