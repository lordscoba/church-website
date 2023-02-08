import React from "react";
import { meetPastor } from "../../images";

const MeetPastors = () => {
  return (
    <section style={{ backgroundColor: "#FFF3E3" }}>
      <div className="row d-flex align-items-center p-1 p-lg-5">
        <div className="col p-4 p-lg-5">
          <h4>Meet Our Pastors</h4>
          <p className="d-none d-lg-block">
            Our youth ministry is a community of young people who are passionate
            about growing in their relationship with God and making a difference
            in the world. We believe that every person has a unique purpose and
            we want to help you discover and live out that purpose.
          </p>
          <p style={{ fontSize: "10px" }} className="d-block d-lg-none">
            Our youth ministry is a community of young people who are passionate
            about growing in their relationship with God and making a difference
            in the world. We believe that every person has a unique purpose and
            we want to help you discover and live out that purpose.
          </p>
          <button className="btn btn-outline-dark rounded-5">
            Contact Pastor
          </button>
        </div>
        <div className="col p-4 p-lg-5">
          <img
            className="img-fluid rounded-3 w-100 d-none d-lg-block"
            src={meetPastor}
            alt="meet pastor"
          />
          <img
            className="img-fluid rounded-3 d-block d-lg-none"
            src={meetPastor}
            alt="meet pastor"
            style={{ height: "210px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default MeetPastors;
