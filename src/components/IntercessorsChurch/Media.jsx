import React from "react";
import {
  InterMedia1,
  InterMedia2,
  InterMedia3,
  InterMedia4,
  InterMedia5,
  InterMedia6,
  InterMedia7,
  InterMedia8,
} from "../../images/gallery";
import { Link } from "react-router-dom";

const Title1 = "Youth Outreach Event";
const Text1 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";
const Title2 = "Youth Outreach Event";
const Text2 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";

const Media = () => {
  return (
    <section>
      <h2 className="text-center fst-italic p-4">Our Media Collections</h2>
      <MediaRow1
        Image1={InterMedia1}
        Image2={InterMedia2}
        Image3={InterMedia3}
        Image4={InterMedia4}
        Title1={Title1}
        Text1={Text1}
      />
      <MediaRow2
        Image5={InterMedia5}
        Image6={InterMedia6}
        Image7={InterMedia7}
        Image8={InterMedia8}
        Title2={Title2}
        Text2={Text2}
      />
      <GalleryRow />
    </section>
  );
};

export const MediaRow1 = ({
  Image1,
  Image2,
  Image3,
  Image4,
  Title1,
  Text1,
}) => {
  return (
    <>
      <div className="row px-3 px-lg-5 mb-1 g-1" id="media">
        <div className="col-8">
          <img
            className="img-fluid rounded-3 w-100 h-100"
            src={Image1}
            alt=""
          />
        </div>
        <div className="col-4">
          <img
            className="img-fluid rounded-3 w-100 h-100"
            src={Image2}
            alt=""
          />
        </div>
      </div>
      <div className="row px-3 px-lg-5 g-1">
        <div className="col-4 d-none d-md-none d-lg-block p-5">
          <h5>{Title1}</h5>
          <p>{Text1}</p>
          <Link
            to={"/youth-gallery"}
            className="btn btn-outline-dark rounded-4"
          >
            Explore collection
          </Link>
        </div>
        <div className="col-4 d-none d-md-block d-lg-none p-3">
          <h5>{Title1}</h5>
          <p style={{ fontSize: "13px" }}>{Text1}</p>
          <Link
            to={"/youth-gallery"}
            className="btn btn-outline-dark rounded-4"
          >
            Explore collection
          </Link>
        </div>
        <div className="col-4 d-block d-md-none d-lg-none">
          <h5 style={{ fontSize: "10px" }} className="m-0">
            {Title1}
          </h5>
          <p style={{ fontSize: "6px" }} className="m-0 mb-1">
            {Text1}
          </p>
          <Link
            to={"/youth-gallery"}
            style={{ fontSize: "7px", height: "22px" }}
            className="btn btn-outline-dark rounded-4 text-nowrap"
          >
            Explore collection
          </Link>
        </div>
        <div className="col-4">
          <img
            className="img-fluid rounded-3 w-100 h-100"
            src={Image3}
            alt=""
          />
        </div>
        <div className="col-4">
          <img
            className="img-fluid rounded-3 w-100 h-100"
            src={Image4}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export const MediaRow2 = ({
  Image5,
  Image6,
  Image7,
  Image8,
  Title2,
  Text2,
}) => {
  return (
    <div className="row px-3 px-lg-5 my-4 g-1">
      <div className="col-8">
        <div className="row g-1">
          <div className="col-7">
            <img
              className="img-fluid rounded-3 w-100 h-100"
              src={Image5}
              alt=""
            />
          </div>
          <div className="col-5">
            <img
              className="img-fluid rounded-3 w-100 h-100"
              src={Image6}
              alt=""
            />
          </div>
        </div>
        <div className="row g-1">
          <div className="col-7 d-none d-md-none d-lg-block p-5">
            <h5>{Title2}</h5>
            <p>{Text2}</p>
            <Link
              to={"/youth-gallery"}
              className="btn btn-outline-dark rounded-4"
            >
              Explore collection
            </Link>
          </div>
          <div className="col-7 d-none d-md-block d-lg-none p-3">
            <h5>{Title2}</h5>
            <p style={{ fontSize: "13px" }}>{Text2}</p>
            <Link
              to={"/youth-gallery"}
              className="btn btn-outline-dark rounded-4"
            >
              Explore collection
            </Link>
          </div>
          <div className="col-7 d-block d-md-none d-lg-none p-1">
            <h5 style={{ fontSize: "10px" }} className="m-0">
              {Title2}
            </h5>
            <p style={{ fontSize: "6px" }} className="m-0">
              {Text2}
            </p>
            <Link
              to={"/youth-gallery"}
              style={{ fontSize: "7px", height: "22px" }}
              className="btn btn-outline-dark rounded-4 text-nowrap"
            >
              Explore collection
            </Link>
          </div>
          <div className="col-5 p-1">
            <img
              className="img-fluid rounded-3 w-100 h-100"
              src={Image7}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-4">
        <img className="img-fluid rounded-3 w-100 h-100" src={Image8} alt="" />
      </div>
    </div>
  );
};

export const GalleryRow = () => {
  return (
    <div className="row my-5">
      <div
        style={{ marginBottom: "-20px", zIndex: "10" }}
        className="col-6 col-md-5 col-lg-4 mx-auto text-center"
      >
        <Link
          to={"/youth-gallery"}
          style={{
            background: "#FFFFFF",
            color: "#000000",
            fontSize: "14px",
          }}
          className="btn btn-outline-dark rounded-4 text-nowrap"
        >
          View all media collections
        </Link>
      </div>
      <hr
        style={{
          border: "none",
          height: "3px",
          color: "#000000",
          backgroundColor: "#000000",
        }}
      />
    </div>
  );
};

export default Media;
