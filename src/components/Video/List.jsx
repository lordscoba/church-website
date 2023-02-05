import React from "react";
import { sermon } from "../../images";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <section>
      <div className="row g-1 p-2 p-lg-5">
        <div className="col-4">
          <input className="form-control" placeholder="Search Sermon" />
        </div>
        <div className="col-4">
          <select className="form-select">
            <option>New Sermons</option>
          </select>
        </div>
        <div className="col-4">
          <select className="form-select">
            <option>Date</option>
          </select>
        </div>
      </div>
      <PopularSermon />
      <AllSermon />
    </section>
  );
};

const AllSermon = () => {
  return (
    <div className="row g-1 p-2 p-lg-5">
      <h3 className="fw-light">All Sermons</h3>
      <div className="col-6 col-lg-4">
        <img className="img-fluid rounded-3" src={sermon} alt="sermon" />
        <h5 className="my-0">Build a Strong Faith with God</h5>
        <p>Pastot. Debra Durgan</p>
      </div>
      <div className="col-6 col-lg-4">
        <img className="img-fluid rounded-3" src={sermon} alt="sermon" />
        <h5 className="my-0">Build a Strong Faith with God</h5>
        <p>Pastot. Debra Durgan</p>
      </div>
      <div className="col-6 col-lg-4">
        <img className="img-fluid rounded-3" src={sermon} alt="sermon" />
        <h5 className="my-0">Build a Strong Faith with God</h5>
        <p>Pastot. Debra Durgan</p>
      </div>
      <hr />
      <div className="row ">
        <div className="col-6 p-3">
          <Link className="float-start text-dark nav-link" to={"/video"}>
            <IoIosArrowBack /> Previous Events
          </Link>
        </div>
        <div className="col-6 p-3">
          <Link className="float-end text-dark nav-link" to={"/video"}>
            Next Events <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

const PopularSermon = () => {
  const pastorStyling = {
    overflowX: "auto",
  };
  const pastorChildStyling = {
    display: "inline-block",
    float: "none",
    width: "auto",
  };
  return (
    <div
      className="row g-1 p-2 p-lg-5 flex-row flex-nowrap"
      style={pastorStyling}
    >
      {/* <h3 className="fw-light">Popular Sermons</h3> */}
      <div className="col-6 col-lg-4" style={pastorStyling}>
        <img className="img-fluid rounded-3" src={sermon} alt="sermon" />
        <h5 className="my-0">Build a Strong Faith with God</h5>
        <p>Pastot. Debra Durgan</p>
      </div>
      <div className="col-6 col-lg-4" style={pastorStyling}>
        <img className="img-fluid rounded-3" src={sermon} alt="sermon" />
        <h5 className="my-0">Build a Strong Faith with God</h5>
        <p>Pastot. Debra Durgan</p>
      </div>
      <div className="col-6 col-lg-4" style={pastorStyling}>
        <img className="img-fluid rounded-3" src={sermon} alt="sermon" />
        <h5 className="my-0">Build a Strong Faith with God</h5>
        <p>Pastot. Debra Durgan</p>
      </div>
      <div className="col-6 col-lg-4" style={pastorStyling}>
        <img className="img-fluid rounded-3" src={sermon} alt="sermon" />
        <h5 className="my-0">Build a Strong Faith with God</h5>
        <p>Pastot. Debra Durgan</p>
      </div>
    </div>
  );
};

export default List;
