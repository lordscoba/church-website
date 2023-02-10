import React from "react";
import {
  kindHearted,
  ellipsePurple,
  ellipseOrange,
  ellipseRed,
  ellipseBlue,
} from "../../images";
import { Link } from "react-router-dom";

export const Worship = () => {
  return (
    <section className="mb-5" id="worship">
      <div className="row">
        <div className="col-12 col-lg-5 p-5">
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
          <div className=" p-2">
            <Link
              to={"/member"}
              className="btn btn-outline-dark rounded-4 mx-1 text-nowrap my-1"
              style={{ fontFamily: "satoshi" }}
            >
              Become a member
            </Link>
            <Link
              to={"/youth-gallery"}
              type="button"
              className="btn btn-outline-dark rounded-4 me-2 my-1 text-nowrap float-none float-md-end float-lg-end"
              style={{ fontFamily: "satoshi" }}
            >
              Explore our gallery
            </Link>
          </div>
        </div>
        <div
          className="col-12 col-lg-7 p-5 ms-auto"
          style={{
            overflow: "hidden",
            position: "relative",
            height: "550px",
            width: "",
          }}
        >
          <div
            className="text-center"
            style={{
              height: "100%",
              width: "100%",
              top: "30px",
              left: "20px",
              position: "absolute",
              zIndex: "1",
            }}
          >
            <img
              className=""
              src={kindHearted}
              style={{ height: "510px", width: "350px", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div
            className=""
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "240px",
              left: "210px",
              zIndex: "10",
            }}
          >
            <img
              className=""
              style={{ height: "350px", width: "350px", objectFit: "cover" }}
              src={ellipsePurple}
              alt=""
            />
          </div>
          <div
            className=""
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "90px",
              left: "210px",
              zIndex: "-20",
            }}
          >
            <img
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
              src={ellipseBlue}
              alt=""
            />
          </div>
          <div
            className=""
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "7px",
              left: "190px",
              zIndex: "-30",
            }}
          >
            <img
              style={{ height: "350px", width: "350px", objectFit: "cover" }}
              src={ellipseRed}
              alt=""
            />
          </div>
          <div
            className=""
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: "90px",
              left: "20px",
              zIndex: "-30",
            }}
          >
            <img
              style={{ height: "350px", width: "350px", objectFit: "cover" }}
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
