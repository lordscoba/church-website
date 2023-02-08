import React from "react";
import {
  subsection1,
  subsection2,
  subsection3,
  subsection4,
} from "../../images";
import { IoIosArrowForward } from "react-icons/io";

const ChurchSubsections = () => {
  return (
    <section className="p-4" style={{ backgroundColor: "#ECF5FF" }}>
      <h4 className="text-center my-4 display-6">Church subsections</h4>
      <div className="row d-flex g-1">
        <div className="col-2 offset-2">
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            className="rounded-4"
            src={subsection1}
            alt=""
          />

          <div className="d-none d-md-block d-lg-block">
            <button
              style={{ marginTop: "-200px", zIndex: "10" }}
              className="btn btn-primary rounded-start rounded-4 text-nowrap"
            >
              Teens <IoIosArrowForward />
            </button>
          </div>
          <div className="d-block d-md-none d-lg-none">
            <button
              style={{
                marginTop: "-150px",
                zIndex: "10",
                fontSize: "6px",
                height: "25px",
              }}
              className="btn btn-primary rounded-start rounded-4 text-nowrap"
            >
              Teens <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="col-2">
          <img
            style={{ maxWidth: "100%" }}
            className="rounded-4"
            src={subsection2}
            alt=""
          />
          <div className="d-none d-md-block d-lg-block">
            <button
              style={{
                marginTop: "-200px",
                zIndex: "10",
                background: "#FF2A31",
              }}
              className="btn rounded-start rounded-4 text-nowrap text-white"
            >
              Adult <IoIosArrowForward />
            </button>
          </div>
          <div className="d-block d-md-none d-lg-none">
            <button
              style={{
                marginTop: "-150px",
                zIndex: "10",
                fontSize: "6px",
                height: "25px",
                background: "#FF2A31",
              }}
              className="btn rounded-start rounded-4 text-nowrap text-white"
            >
              Adult <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="col-2">
          <img
            style={{ maxWidth: "100%" }}
            className="rounded-4"
            src={subsection3}
            alt=""
          />
          <div className="d-none d-md-block d-lg-block">
            <button
              style={{
                marginTop: "-200px",
                zIndex: "10",
                background: "#FF8E00",
              }}
              className="btn rounded-start rounded-4 text-nowrap text-white"
            >
              Children <IoIosArrowForward />
            </button>
          </div>
          <div className="d-block d-md-none d-lg-none">
            <button
              style={{
                marginTop: "-150px",
                zIndex: "10",
                fontSize: "6px",
                height: "25px",
                background: "#FF8E00",
              }}
              className="btn rounded-start rounded-4 text-nowrap text-white"
            >
              Children <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="col-2">
          <img
            style={{ maxWidth: "100%" }}
            className="rounded-4"
            src={subsection4}
            alt=""
          />
          <div className="d-none d-md-block d-lg-block">
            <button
              style={{
                marginTop: "-200px",
                zIndex: "10",
                background: "#9747FF",
              }}
              className="btn rounded-start rounded-4 text-nowrap text-white"
            >
              CFM <IoIosArrowForward />
            </button>
          </div>
          <div className="d-block d-md-none d-lg-none">
            <button
              style={{
                marginTop: "-150px",
                zIndex: "10",
                fontSize: "6px",
                height: "25px",
                background: "#9747FF",
              }}
              className="btn btn-primary rounded-start rounded-4 text-nowrap text-white"
            >
              CFM <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChurchSubsections;
