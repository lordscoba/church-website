import React from "react";
import { Welcome, Experience, Ways } from "../../components/Giving";
import { NavbarMenu } from "../../components/Layout";
import { bible } from "../../images";

const Giving = () => {
  const background_image = {
    backgroundImage: `url(${bible})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <header style={background_image}>
        <NavbarMenu />
        <Welcome />
      </header>
      <Experience />
      <Ways />
    </div>
  );
};

export default Giving;
