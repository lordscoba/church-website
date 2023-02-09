import React from "react";
import {
  PrayerNight1,
  PrayerNight2,
  PrayerNight3,
  PrayerNight4,
  PrayerNight5,
  PrayerNight6,
  PrayerNight7,
  PrayerNight8,
} from "../../images/gallery";

const PrayerNight = () => {
  return (
    <section className=" mx-5 mt-5">
      <div
        className="row p-3 g-1 rounded-3 align-items-center"
        style={{ backgroundColor: "#FFA739" }}
      >
        <div className="col-12 col-lg-3 p-1 p-lg-2">
          <h1>Prayer Night</h1>
        </div>
        <div className="col-12 col-lg-6 p-1 p-lg-2">
          <p>
            Our youth group is a community of young people who are passionate
            about growing in their faith and making a difference in the world.{" "}
          </p>
        </div>
        <div className="col-12 col-lg-3 text-center p-1 p-lg-2">
          <button className="btn btn-outline-dark rounded-4">
            Explore collection
          </button>
        </div>
      </div>
      <div className="row g-1 my-1">
        <div className="col-4">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={PrayerNight1}
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={PrayerNight2}
            alt=""
          />
        </div>
        <div className="col-4">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={PrayerNight3}
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={PrayerNight4}
            alt=""
          />
        </div>
      </div>
      <div className="row g-1 my-1">
        <div className="col-2">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={PrayerNight5}
            alt=""
          />
        </div>
        <div className="col-4">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={PrayerNight6}
            alt=""
          />
        </div>
        <div className="col-4">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={PrayerNight7}
            alt=""
          />
        </div>
        <div className="col-2">
          <img
            className="img-fluid w-100 h-100 rounded-3"
            src={PrayerNight8}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default PrayerNight;
