import React from "react";
import {
  kindHearted,
  ellipsePurple,
  ellipseOrange,
  ellipseRed,
} from "../../images";

export const Worship = () => {
  return (
    <section className="mb-5">
      <div className="row">
        <div className="col-5 p-5">
          <h1 className="p-3">
            Are you in Lekki, Ikoyi, Oniru, V.I and Banana Island? Come worship
            with us
          </h1>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
            adipiscing netus sapien enim etiam sit. Proin dui augue mattis
            lorem. Nunc rutrum pharetra id a dictum venenatis sodales
            ullamcorper. Bibendum at vitae tristique viverra massa{" "}
          </p>
          <div className="hstack p-3">
            <button
              type="button"
              className="btn btn-outline-dark rounded-4 mx-2"
              style={{ fontFamily: "satoshi" }}
            >
              Become a member
            </button>
            <button
              type="button"
              className="btn btn-outline-dark rounded-4 mx-2"
              style={{ fontFamily: "satoshi" }}
            >
              Explore our gallery
            </button>
          </div>
        </div>
        <div
          className="col-7 position-relative p-0"
          style={{ overflow: "hidden" }}
        >
          <div className="position-absolute top-50 start-50">
            <img
              style={{ height: "40rem", width: "100%" }}
              src={kindHearted}
              alt=""
            />
          </div>
          <div className="position-absolute bottom-0 end-0">
            <img
              style={{ height: "20rem", width: "100%" }}
              src={ellipsePurple}
              alt=""
            />
          </div>
          <div className="position-absolute top-0 end-0">
            <img
              style={{ height: "20rem", width: "100%" }}
              src={ellipseRed}
              alt=""
            />
          </div>
          <div className="position-absolute top-50 start-0">
            <img
              style={{ height: "20rem", width: "100%" }}
              src={ellipseOrange}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Worship;