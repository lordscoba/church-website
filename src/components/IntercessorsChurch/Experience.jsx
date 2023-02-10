import React from "react";
import { spiritualityHands } from "../../images";

const Experience = () => {
  const background_image = {
    backgroundImage: `url(${spiritualityHands})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundColor: "#EEF6FF",
    // backgroundAttachment: "fixed",
  };
  return (
    <section className="" style={background_image}>
      <div className="row py-3" style={{ height: "650px" }}>
        <div className="col-10 col-lg-6 align-self-center p-5">
          <h3>Experience the power of prayer and intercession in our Church</h3>
          <p className="my-4">
            Welcome to our Intercessors Fellowship! Join a community of
            believers in prayer and intercession for our Church, community, and
            the world. Our fellowship offers weekly meetings, training and
            equipping sessions, special events, and more. Join us and experience
            the power of prayer.
          </p>
          <button className="btn btn-outline-dark rounded-5 me-3 mb-3 mb-lg-0">
            Become a member
          </button>
          <button className="btn btn-outline-dark rounded-5">
            Request Prayer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
