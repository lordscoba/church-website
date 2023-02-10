import React from "react";
import { wavyBorderWhite, wavyBorderYellow } from "../../images";
import { birdIcon, ropeIcon, sunIcon, heartIcon } from "../../images/icons";

const Discover = () => {
  const background_image = {
    backgroundImage: `url(${wavyBorderWhite})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "20",
    marginTop: "-5%",
    // backgroundAttachment: "fixed",
  };
  return (
    <section className="py-5" style={background_image}>
      <div className="row p-3 p-lg-5" style={{ height: "600px" }}>
        <div className="col-2 col-lg-3">
          <div className="row h-100">
            <div className="col-12 align-self-start" style={{ width: "100%" }}>
              <img className="img-fluid" src={birdIcon} alt="" />
            </div>
            <div className="col-12 align-self-end">
              <img className="img-fluid" src={ropeIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="col-8 col-lg-6 align-self-center">
          <h4 className="text-center display-4">
            Discover a world of faith and fun at our Children Church
          </h4>
          <p className="text-center">
            We offer a fun and interactive environment for children to discover
            and grow in their faith. Our programs include Bible stories, songs,
            games, and activities that are tailored to meet the spiritual needs
            of children. Our experienced leaders provide a safe and nurturing
            environment for children to explore their faith and make friends.
          </p>
          <div className="text-center">
            <button className="btn btn-outline-dark rounded-5 me-2 mb-3 mb-md-0 mb-lg-0">
              Become a member
            </button>
            <button className="btn btn-outline-dark rounded-5">
              Support Church
            </button>
          </div>
        </div>
        <div className="col-2 col-lg-3">
          <div className="row h-100">
            <div className="col-12 align-self-start">
              <img className="img-fluid" src={sunIcon} alt="" />
            </div>
            <div className="col-12 align-self-end">
              <img className="img-fluid" src={heartIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
