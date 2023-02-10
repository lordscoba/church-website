import React from "react";
import {
  YouthStash1,
  YouthStash2,
  YouthStash3,
  YouthStash4,
  YouthStash5,
  YouthStash6,
  YouthStash7,
} from "../../images/gallery";
import { Link } from "react-router-dom";

const MemberPage = () => {
  return (
    <section className="py-5">
      <Row1 />
    </section>
  );
};

const Row1 = () => {
  return (
    <>
      <div className="row g-4 py-5" id="member">
        <div className="text-white col-12 col-md-6 col-lg-6 px-5">
          <h3 className="display-4 fst-italic">
            Welcome to the youth ministry at our church!
          </h3>
        </div>
        <div className="text-white col-12 col-md-6 col-lg-6 px-5">
          <p>
            Our youth group is a community of young people who are passionate
            about growing in their faith and making a difference in the world.
            We believe that God has a unique purpose for each of our lives, and
            we want to help you discover and live out that purpose.
          </p>
          <Link to={"/member"} className="btn btn-outline-light rounded-5 me-3">
            Become a member
          </Link>
          <Link to={"/giving"} className="btn btn-outline-light rounded-5">
            Support Us
          </Link>
        </div>
      </div>
      <div className="row g-1">
        <div className="col-2">
          <img
            src={YouthStash1}
            className="img-fluid w-100 h-100 rounded-3"
            alt=""
          />
        </div>
        <div className="col-2">
          <div className="row g-1 h-100">
            <div className="col-12" style={{ marginTop: "-7%" }}>
              <img
                src={YouthStash2}
                className="img-fluid w-100 h-100 rounded-3"
                alt=""
              />
            </div>
            <div className="col-12" style={{ marginBottom: "-9%" }}>
              <img
                src={YouthStash3}
                className="img-fluid w-100 h-100 rounded-3"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-4">
          <img
            src={YouthStash4}
            className="img-fluid w-100 h-100 rounded-3"
            alt=""
          />
        </div>
        <div className="col-2">
          <div className="row g-1 h-100">
            <div className="col-12" style={{ marginTop: "-7%" }}>
              <img
                src={YouthStash5}
                className="img-fluid w-100 h-100 rounded-3"
                alt=""
              />
            </div>
            <div className="col-12" style={{ marginBottom: "-9%" }}>
              <img
                src={YouthStash6}
                className="img-fluid w-100 h-100 rounded-3"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="col-2">
          <img
            src={YouthStash7}
            className="img-fluid w-100 h-100 rounded-3"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MemberPage;
