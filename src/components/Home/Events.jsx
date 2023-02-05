import React from "react";
import { prayerManBending } from "../../images";

export const Events = () => {
  return (
    <section
      className="text-white p-3 p-lg-5"
      style={{ backgroundColor: "#000000" }}
    >
      <h2>Upcoming Events</h2>
      <div className="row g-1 g-lg-2">
        <div className="col-6 col-lg-4 p-1">
          <img
            className="img-fluid rounded-3 mb-2"
            src={prayerManBending}
            alt=""
          />
          <small style={{ color: "#FF8E00", fontSize: "10px" }}>
            December 17, 2022
          </small>
          <p>40 Days Prayer and Fasting</p>
          <p style={{ fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur. At pellentesque facilisi
            massa vestibulum pretium
          </p>
          <button
            type="button"
            className="btn btn-outline-light rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Learn More
          </button>
        </div>
        <div className="col-6 col-lg-4 p-1">
          <img
            className="img-fluid rounded-3 mb-2"
            src={prayerManBending}
            alt=""
          />
          <small style={{ color: "#FF8E00", fontSize: "10px" }}>
            December 17, 2022
          </small>
          <p>40 Days Prayer and Fasting</p>
          <p style={{ fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur. At pellentesque facilisi
            massa vestibulum pretium
          </p>
          <button
            type="button"
            className="btn btn-outline-light rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Learn More
          </button>
        </div>
        <div className="col-6 col-lg-4 p-1">
          <img
            className="img-fluid rounded-3 mb-2"
            src={prayerManBending}
            alt=""
          />
          <small style={{ color: "#FF8E00", fontSize: "10px" }}>
            December 17, 2022
          </small>
          <p>40 Days Prayer and Fasting</p>
          <p style={{ fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur. At pellentesque facilisi
            massa vestibulum pretium
          </p>
          <button
            type="button"
            className="btn btn-outline-light rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-4 mx-auto text-center">
          <button
            type="button"
            className="btn btn-outline-light rounded-5 text-nowrap"
            style={{ fontFamily: "satoshi" }}
          >
            Check all Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
