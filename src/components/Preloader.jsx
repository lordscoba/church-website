import React from "react";
import { foursquareLogo } from "../images";

const Preloader = () => {
  return (
    <div
      className="row align-items-center"
      style={{ height: "100vh", backgroundColor: "#272727" }}
    >
      {/* <div
        style={{
          width: "100vh",
          height: "100vh",
          backgroundColor: "gray",
        }}
      > */}
      <div className="col-6 mx-auto">
        <div className="text-center">
          <img
            src={foursquareLogo}
            className="img-fluid"
            style={{ width: "80%" }}
          />
        </div>
        <h1 className="display-2 text-white text-center">
          Welcome to 4square Oniru church
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
