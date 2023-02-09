import React from "react";

const Buttons = () => {
  return (
    <div
      className="row g-1 g-lg-2 p-2 p-lg-5"
      style={{ backgroundColor: "#474747" }}
    >
      <div className="col-3 col-lg-2 offset-lg-2">
        <button
          className="btn btn-outline-light rounded-2 text-nowrap w-100 p-lg-3"
          style={{ fontSize: "8px" }}
        >
          Youth Church
        </button>
      </div>
      <div className="col-3 col-lg-2">
        <button
          className="btn btn-outline-light rounded-2 text-nowrap w-100 p-lg-3 overflow-auto"
          style={{ fontSize: "8px" }}
        >
          Intercessors Fellowship
        </button>
      </div>
      <div className="col-3 col-lg-2">
        <button
          className="btn btn-outline-light rounded-2 text-nowrap w-100 p-lg-3 overflow-auto"
          style={{ fontSize: "8px" }}
        >
          Ladies Fellowship
        </button>
      </div>
      <div className="col-3 col-lg-2">
        <button
          className="btn btn-outline-light rounded-2 text-nowrap w-100 p-lg-3"
          style={{ fontSize: "8px" }}
        >
          Family Church
        </button>
      </div>
    </div>
  );
};

export default Buttons;
