import React from "react";
import { peoplePraying } from "../../images";
import { TbInfoSquare } from "react-icons/tb";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Gallery = () => {
  const background_image = {
    backgroundImage: `url(${peoplePraying})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
  };
  return (
    <section className="text-white my-4" style={background_image}>
      <div className="row align-items-end" style={{ height: "600px" }}>
        <div className="col-1 offset-2 me-3 me-lg-0">
          <IconContext.Provider value={{ size: "35px" }}>
            <div>
              <TbInfoSquare />
            </div>
          </IconContext.Provider>
          ;
        </div>
        <div
          className="col-6 col-lg-4 mb-3 p-3 rounded-4"
          style={{ backgroundColor: "rgba(217, 217, 217, 0.2)" }}
        >
          <p className="">
            We are thrilled to introduce our pastoral staff at XYZ Church. Our
            team of dedicated and passionate leaders are committed to serving
            our congregation and community with love and grace.
          </p>
          <Link
            to={"/youth-gallery"}
            type="button"
            className="btn btn-outline-light rounded-5"
            style={{ fontFamily: "satoshi" }}
          >
            Explore Church Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
