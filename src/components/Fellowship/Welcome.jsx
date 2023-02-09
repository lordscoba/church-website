import React from "react";
import { OutputIcon1, OutputIcon2, OutputIcon3 } from "../../images/icons";

const Welcome = () => {
  return (
    <section className="text-white">
      <div className="row p-5" style={{ height: "600px" }}>
        <div className="offset-1 offset-lg-5 col-10 col-lg-6">
          <div className="row g-3 g-md-3 g-lg-5">
            <div className="col-6">
              <div className="d-flex">
                <img
                  style={{ height: "30px" }}
                  src={OutputIcon3}
                  className="img-fluid"
                  alt=""
                />{" "}
                &nbsp;&nbsp;
                <h4 style={{ fontSize: "13px" }}>
                  Intercessors <br /> Fellowship
                </h4>
              </div>
              <p style={{ fontSize: "11px" }}>
                Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
                adipiscing netus sapien enim etiam sit. Proin
              </p>
              <button
                style={{ fontSize: "9px" }}
                className="btn btn-outline-light rounded-5"
              >
                Visits church
              </button>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <img
                  style={{ height: "30px" }}
                  src={OutputIcon1}
                  className="img-fluid"
                  alt=""
                />{" "}
                &nbsp;&nbsp;
                <h4 style={{ fontSize: "13px" }}>
                  Youth <br /> Church
                </h4>
              </div>
              <p style={{ fontSize: "11px" }}>
                Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
                adipiscing netus sapien enim etiam sit. Proin
              </p>
              <button
                style={{ fontSize: "9px" }}
                className="btn btn-outline-light rounded-5"
              >
                Visits church
              </button>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <img
                  style={{ height: "30px" }}
                  src={OutputIcon2}
                  className="img-fluid"
                  alt=""
                />{" "}
                &nbsp;&nbsp;
                <h4 style={{ fontSize: "13px" }}>
                  Family <br /> Church
                </h4>
              </div>
              <p style={{ fontSize: "11px" }}>
                Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
                adipiscing netus sapien enim etiam sit. Proin
              </p>
              <button
                style={{ fontSize: "9px" }}
                className="btn btn-outline-light rounded-5"
              >
                Visits church
              </button>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <img
                  style={{ height: "30px" }}
                  src={OutputIcon2}
                  className="img-fluid"
                  alt=""
                />{" "}
                &nbsp;&nbsp;
                <h4 style={{ fontSize: "13px" }}>
                  Ladies <br /> Fellowship
                </h4>
              </div>
              <p style={{ fontSize: "11px" }}>
                Lorem ipsum dolor sit amet consectetur. Eu donec feugiat sodales
                adipiscing netus sapien enim etiam sit. Proin
              </p>
              <button
                style={{ fontSize: "9px" }}
                className="btn btn-outline-light rounded-5"
              >
                Visits church
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
