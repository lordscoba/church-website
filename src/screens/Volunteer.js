import React from "react";
import { NavbarMenu } from "../components/Layout";
import { volunteerMain } from "../images";
import { Welcome, List } from "../components/Volunteer";

const Volunteer = () => {
  const background_image = {
    backgroundImage: `url(${volunteerMain})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <header style={background_image}>
        <NavbarMenu />
        <Welcome />
      </header>
      <List />
    </div>
  );
};

export default Volunteer;
