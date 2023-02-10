import React from "react";
import { Link } from "react-router-dom";
import { asset, giveOnline, givePerson } from "../../images/icons";

const Ways = () => {
  return (
    <section style={{ backgroundColor: "#F1EFEF" }}>
      <div className="row">
        <h1 className="text-center my-5">Ways to Give</h1>
      </div>
      <div className="row px-5 gy-2 p-4 align-items-center justify-content-center pb-5">
        <div
          className="col-12 col-md-6 col-lg-3 p-4 rounded-4 mx-md-2"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="card-body">
            <div align="center">
              <img className="img-fluid" src={giveOnline} alt="" />
            </div>
            <h3 className="text-center">Give Online</h3>
            <hr />
            <p className="text-center">
              Please email foursquareoniru@mail.com if you would like to donate
              any additional assets such as vehicles or real estate etc.
            </p>
            <div align="center">
              <Link
                to={"/giving-online"}
                className=" btn rounded-4"
                style={{ backgroundColor: "#9747FF" }}
              >
                Give Now
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-3 p-4 rounded-4 mx-md-2"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="card-body">
            <div align="center">
              <img className="img-fluid" src={givePerson} alt="" />
            </div>
            <h3 className="text-center">Give in Person</h3>
            <hr />
            <p className="text-center">
              Please email foursquareoniru@mail.com if you would like to donate
              any additional assets such as vehicles or real estate etc.
            </p>
            <div align="center">
              <Link
                to={"/giving-online"}
                className="btn rounded-4"
                style={{ backgroundColor: "#9747FF" }}
              >
                Give Now
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-lg-3 p-4 rounded-4 mx-md-2"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="card-body">
            <div align="center">
              <img className="img-fluid" src={asset} alt="" />
            </div>
            <h3 className="text-center">Assest</h3>
            <hr />
            <p className="text-center">
              Please email foursquareoniru@mail.com if you would like to donate
              any additional assets such as vehicles or real estate etc.
            </p>
            <div align="center">
              <Link
                to={"/giving-online"}
                className=" btn rounded-4"
                style={{ backgroundColor: "#9747FF" }}
              >
                Give Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ways;
