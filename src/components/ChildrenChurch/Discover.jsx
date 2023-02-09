import React from "react";
import { wavyBorderWhite, wavyBorderYellow } from "../../images";

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
      <div className="row" style={{ height: "450px" }}>
        <div className="col-9 col-lg-6 mx-auto align-self-center">
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
      </div>
    </section>
  );
};

export default Discover;
