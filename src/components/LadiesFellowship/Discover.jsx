import React from "react";
import {
  LadiesStash1,
  LadiesStash2,
  LadiesStash3,
  LadiesStash4,
  LadiesStash5,
  LadiesStash6,
} from "../../images/gallery";

const Discover = () => {
  return (
    <section style={{ backgroundColor: "#F4EEFD" }}>
      <div className="row g-2">
        <div className="col-10 col-md-7 col-lg-7 p-4 d-block d-md-none d-lg-none align-self-center">
          <h4>
            Discover a sisterhood of faith and empowerment in our Ladies
            Ministry
          </h4>
          <p style={{ fontSize: "12px" }}>
            We are a community of women who come together to support, encourage
            and empower each other through faith and fellowship. Our Bible
            studies, workshops and events are tailored to meet the needs of
            today's women. We believe that every woman has the potential to be a
            leader in her own right, and we strive to empower each other through
            our shared faith in God. Whether you're new to faith or a long-time
            believer, you'll find a warm and welcoming community in our Ladies
            Ministry. We provide a safe and supportive environment where women
            can come together and share their experiences, struggles, and
            successes. We encourage one another to grow in our relationship with
            God and to use our gifts to serve others. Join us and discover a
            sisterhood of faith and empowerment as we grow together in our
            relationship with God and serve others. We look forward to meeting
            you and growing together in faith and friendship.
          </p>
          <button
            className="btn btn-outline-dark rounded-4 me-2"
            style={{ fontSize: "10px" }}
          >
            Become a member
          </button>
          <button
            className="btn btn-outline-dark rounded-4"
            style={{ fontSize: "10px" }}
          >
            Support the church
          </button>
        </div>
        <div className="col-10 col-md-7 col-lg-7 p-4 d-none d-md-block d-lg-block p-1 p-lg-5 align-self-center">
          <h1 className="p-1 p-lg-3">
            Discover a sisterhood of faith and empowerment in our Ladies
            Ministry
          </h1>
          <p className="p-1 p-lg-3">
            We are a community of women who come together to support, encourage
            and empower each other through faith and fellowship. Our Bible
            studies, workshops and events are tailored to meet the needs of
            today's women. We believe that every woman has the potential to be a
            leader in her own right, and we strive to empower each other through
            our shared faith in God. Whether you're new to faith or a long-time
            believer, you'll find a warm and welcoming community in our Ladies
            Ministry. We provide a safe and supportive environment where women
            can come together and share their experiences, struggles, and
            successes. We encourage one another to grow in our relationship with
            God and to use our gifts to serve others. Join us and discover a
            sisterhood of faith and empowerment as we grow together in our
            relationship with God and serve others. We look forward to meeting
            you and growing together in faith and friendship.
          </p>
          <div className="my-5 p-1 p-lg-3">
            <button className="btn btn-outline-dark rounded-4  me-2">
              Become a member
            </button>
            <button className="btn btn-outline-dark rounded-4">
              Support the church
            </button>
          </div>
        </div>
        <div className="col-3 d-none d-md-block d-lg-block">
          <div className="row g-2 h-100">
            <div className="col-12 ">
              <img
                className="img-fluid w-100 h-100"
                src={LadiesStash1}
                alt=""
                style={{ borderRadius: "85px" }}
              />
            </div>
            <div className="col-12">
              <img
                className="img-fluid w-100 h-100"
                src={LadiesStash2}
                alt=""
                style={{ borderRadius: "85px" }}
              />
            </div>
            <div className="col-12">
              <img
                className="img-fluid w-100 h-100"
                src={LadiesStash3}
                alt=""
                style={{ borderRadius: "85px 85px 0px 0px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="row g-2 h-100">
            <div className="col-12">
              <img
                className="img-fluid w-100 h-100"
                src={LadiesStash4}
                alt=""
                style={{ borderRadius: "0px 0px 0px 85px", objectFit: "cover" }}
              />
            </div>
            <div className="col-12">
              <img
                className="img-fluid w-100 h-100"
                src={LadiesStash5}
                alt=""
                style={{
                  borderRadius: "75px 0px 0px 75px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-12">
              <img
                className="img-fluid w-100 h-100"
                src={LadiesStash6}
                alt=""
                style={{
                  borderRadius: "75px 0px 0px 75px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
