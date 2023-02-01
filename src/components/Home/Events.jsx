import React from "react";
import { prayerManBending } from "../../images";

export const Events = () => {
  return (
    <section className="text-white p-5" style={{ backgroundColor: "#000000" }}>
      <h2>Upcoming Events</h2>
      <div className="row g-1">
        <div className="col-4 p-1 vstack">
          <img
            className="img-fluid rounded-4 mb-2"
            src={prayerManBending}
            alt=""
          />
          <small style={{ color: "#FF8E00" }}>December 17, 2022</small>
          <p>40 Days Prayer and Fasting</p>
          <p>
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
        <div className="col-4 p-1 vstack">
          <img
            className="img-fluid rounded-4 mb-2"
            src={prayerManBending}
            alt=""
          />
          <small style={{ color: "#FF8E00" }}>December 17, 2022</small>
          <p>40 Days Prayer and Fasting</p>
          <p>
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
        <div className="col-4 p-1 vstack">
          <img
            className="img-fluid rounded-4 mb-2"
            src={prayerManBending}
            alt=""
          />
          <small style={{ color: "#FF8E00" }}>December 17, 2022</small>
          <p>40 Days Prayer and Fasting</p>
          <p>
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
      <div className="row m-4">
        <div className="col-3 mx-auto">
          <button
            type="button"
            className="btn btn-outline-light rounded-5"
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
