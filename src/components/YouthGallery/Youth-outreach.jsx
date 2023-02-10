import React from "react";
import {
  YouthEvent1,
  YouthEvent2,
  YouthEvent3,
  YouthEvent4,
  YouthEvent5,
  YouthEvent6,
  YouthEvent7,
  YouthEvent8,
} from "../../images/gallery";

const YouthOutreach = () => {
  return (
    <section className=" mx-2 mx-lg-5 my-3 my-lg-5">
      <div
        className="row p-3 g-1 rounded-3 align-items-center"
        style={{ backgroundColor: "#FFA739" }}
      >
        <div className="col-12 col-lg-4 p-1 p-lg-2">
          <h1>Youth Outreach Event </h1>
        </div>
        <div className="col-12 col-lg-6 p-1 p-lg-2">
          <p>
            Our youth group is a community of young people who are passionate
            about growing in their faith and making a difference in the world.{" "}
          </p>
        </div>
        <div className="col-12 col-lg-2 text-center p-1 p-lg-2">
          <button className="btn btn-outline-dark rounded-4">
            Explore collection
          </button>
        </div>
      </div>
      <div className="row g-1 my-1">
        <div className="col-4">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={YouthEvent1}
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={YouthEvent2}
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={YouthEvent3}
            alt=""
          />
        </div>
        <div className="col-4">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={YouthEvent4}
            alt=""
          />
        </div>
      </div>
      <div className="row g-1 my-1">
        <div className="col-2">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={YouthEvent5}
            alt=""
          />
        </div>
        <div className="col-4">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={YouthEvent6}
            alt=""
          />
        </div>
        <div className="col-4">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={YouthEvent7}
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={YouthEvent8}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default YouthOutreach;
