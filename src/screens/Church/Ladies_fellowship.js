import React from "react";
import { Welcome, Discover, Media } from "../../components/LadiesFellowship";
import { MeetPastors } from "../../components/YouthChurch";
import { NavbarMenu } from "../../components/Layout";
import { ladiesHero } from "../../images";

const ladiesFellowship = () => {
  const background_image = {
    backgroundImage: `url(${ladiesHero})`,
    maxHeight: "100%",
    maxWidth: "100%",
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundColor: "#9747FF",
    // backgroundAttachment: "fixed",
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <header style={background_image}>
        <NavbarMenu />
        <Welcome />
      </header>
      <Discover />
      <Media />
      <MeetPastors />
    </div>
  );
};

export default ladiesFellowship;
