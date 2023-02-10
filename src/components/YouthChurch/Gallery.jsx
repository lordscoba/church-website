import React from "react";
import {
  YouthMedia1,
  YouthMedia2,
  YouthMedia3,
  YouthMedia4,
  YouthMedia5,
  YouthMedia6,
  YouthMedia7,
  YouthMedia8,
} from "../../images/gallery";
import { Link } from "react-router-dom";

import { titleVector, vectorFine } from "../../images";

const Title1 = "Youth Outreach Event";
const Text1 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";
const Title2 = "Youth Outreach Event";
const Text2 =
  "Our youth group is a community of young people who are passionat about growing in their faith and making a difference in the world.";

const vector_image = {
  backgroundImage: `url(${vectorFine})`,
  maxHeight: "auto",
  maxWidth: "100%",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  zIndex: "50",
  marginRight: "-5%",
};
const Gallery = () => {
  const background_image = {
    backgroundImage: `url(${titleVector})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transform: "rotate(-3.38deg)",
  };
  return (
    <section className="mx-2 mx-lg-5" id="gallery">
      <br />
      <br />
      <div className="row my-5">
        <div className="col-11 col-md-5 col-lg-5 mx-auto">
          <h2 style={background_image} className="text-center fst-italic p-4">
            Our Gallery
          </h2>
        </div>
      </div>
      <br />
      <br />
      <MediaRow1
        Image1={YouthMedia1}
        Image2={YouthMedia2}
        Image3={YouthMedia3}
        Image4={YouthMedia4}
        Title1={Title1}
        Text1={Text1}
      />
      <MediaRow2
        Image5={YouthMedia5}
        Image6={YouthMedia6}
        Image7={YouthMedia7}
        Image8={YouthMedia8}
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
      <div
        className="row px-3 px-lg-5 mb-1 g-1"
        style={{ marginBottom: "-90px" }}
      >
        <div className="col-4" style={{ marginRight: "-5%" }}>
          <img
            className="img-fluid w-100 h-100"
            style={{ transform: "rotate(-8deg)" }}
            src={Image1}
            alt=""
          />
        </div>
        <div className="col-8" style={{ marginLeft: "-5%" }}>
          <img
            className="img-fluid w-100 h-100 border border-3 border-light"
            style={{ transform: "rotate(1.98deg)" }}
            src={Image2}
            alt=""
          />
        </div>
      </div>
      <div className="row px-3 px-lg-5 g-1" style={{ marginTop: "-12%" }}>
        <div
          style={vector_image}
          className="col-4 d-none d-md-none d-lg-block p-5"
        >
          <h5>{Title1}</h5>
          <p>{Text1}</p>
          <Link
            to={"/youth-gallery"}
            className="btn btn-outline-dark rounded-4"
          >
            Explore collection
          </Link>
        </div>
        <div
          style={vector_image}
          className="col-4 d-none d-md-block d-lg-none p-3"
        >
          <h5>{Title1}</h5>
          <p style={{ fontSize: "13px" }}>{Text1}</p>
          <Link
            to={"/youth-gallery"}
            className="btn btn-outline-dark rounded-4"
          >
            Explore collection
          </Link>
        </div>
        <div
          style={vector_image}
          className="col-4 d-block d-md-none d-lg-none p-1"
        >
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
            className="img-fluid w-100 h-100 border border-3 border-light"
            style={{ transform: "rotate(-2.75deg)" }}
            src={Image3}
            alt=""
          />
        </div>
        <div className="col-4" style={{ marginLeft: "-9%" }}>
          <img
            className="img-fluid w-100 h-100"
            style={{ transform: "rotate(10.6deg)" }}
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
    <>
      <div className="row px-3 px-lg-5 mb-1 mt-5 g-1">
        <div className="col-8" style={{ marginRight: "-5%" }}>
          <img
            className="img-fluid w-100 h-100  border border-3 border-light"
            style={{ transform: "rotate(1.98deg)" }}
            src={Image5}
            alt=""
          />
        </div>
        <div className="col-4" style={{ marginLeft: "-5%" }}>
          <img
            className="img-fluid w-100 h-100 "
            style={{ transform: "rotate(-8deg)" }}
            src={Image6}
            alt=""
          />
        </div>
      </div>
      <div className="row px-3 px-lg-5 g-1" style={{ marginTop: "-9%" }}>
        <div
          style={vector_image}
          className="col-4 d-none d-md-none d-lg-block p-5"
        >
          <h5>{Title2}</h5>
          <p>{Text2}</p>
          <Link
            to={"/youth-gallery"}
            className="btn btn-outline-dark rounded-4"
          >
            Explore collection
          </Link>
        </div>
        <div
          style={vector_image}
          className="col-4 d-none d-md-block d-lg-none p-3"
        >
          <h5>{Title2}</h5>
          <p style={{ fontSize: "13px" }}>{Text2}</p>
          <Link
            to={"/youth-gallery"}
            className="btn btn-outline-dark rounded-4"
          >
            Explore collection
          </Link>
        </div>
        <div
          style={vector_image}
          className="col-4 d-block d-md-none d-lg-none p-1"
        >
          <h5 style={{ fontSize: "10px" }} className="m-0">
            {Title2}
          </h5>
          <p style={{ fontSize: "6px" }} className="m-0 mb-1">
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
        <div className="col-4">
          <img
            className="img-fluid w-100 h-100  border border-3 border-light"
            style={{ transform: "rotate(-2.75deg)" }}
            src={Image7}
            alt=""
          />
        </div>
        <div className="col-4" style={{ marginLeft: "-5%" }}>
          <img
            className="img-fluid w-100 h-100"
            style={{ transform: "rotate(10.6deg)" }}
            src={Image8}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export const GalleryRow = () => {
  return (
    <div className="row py-5 mx-0">
      <div
        style={{ marginBottom: "-20px", zIndex: "10" }}
        className="col-6 col-md-5 col-lg-4 mx-auto text-center"
      >
        <Link
          to={"/youth-gallery"}
          style={{
            background: "#474747",
            // color: "#000000",
            fontSize: "14px",
          }}
          className="btn btn-outline-light rounded-4 text-nowrap"
        >
          View all media collections
        </Link>
      </div>
      <hr
        style={{
          border: "none",
          height: "3px",
          color: "#FFFFFF",
          backgroundColor: "#FFFFFF",
        }}
      />
    </div>
  );
};

export default Gallery;
