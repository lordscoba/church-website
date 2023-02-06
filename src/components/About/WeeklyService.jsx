import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const WeeklyService = () => {
  return (
    <section>
      <div className="row ms-4">
        <div className="col-12 col-md-4 col-lg-4 p-4">
          <h1 className="my-2 display-2 fst-italic">Our Weekly Service</h1>
        </div>
        <div className="col-12 col-md-8 col-lg-8">
          <div className="p-5 me-lg-5">
            <hr />
            <div className="">
              <span className="display-6">Sunday Service</span>
              <span className="float-end display-6">
                <IoIosArrowDropdown />
              </span>
            </div>
            <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
              <li>Workers Prayer Meeting &nbsp;&nbsp; 7am - 8am</li>
              <li>Living Spring &nbsp;&nbsp;8am - 9am</li>
              <li>Sunday School &nbsp;&nbsp;9am - 10am</li>
              <li>Worship Service &nbsp;&nbsp;10am - 12pm</li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-dark rounded-5 float-end text-nowrap"
              style={{ fontFamily: "satoshi" }}
            >
              Add to your Calender
            </button>
          </div>
          <div className="p-5 me-lg-5">
            <hr />
            <div className="">
              <span className="display-6">Sunday Service</span>
              <span className="float-end display-6">
                <IoIosArrowDropdown />
              </span>
            </div>
            <ul style={{ listStyleType: "none" }} className="ps-0 ms-0">
              <li>Workers Prayer Meeting &nbsp;&nbsp; 7am - 8am</li>
              <li>Living Spring &nbsp;&nbsp;8am - 9am</li>
              <li>Sunday School &nbsp;&nbsp;9am - 10am</li>
              <li>Worship Service &nbsp;&nbsp;10am - 12pm</li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-dark rounded-5 float-end text-nowrap"
              style={{ fontFamily: "satoshi" }}
            >
              Add to your Calender
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyService;
