import React from "react";
import { Welcome, Discover, Media } from "../../components/LadiesFellowship";
import { MeetPastors } from "../../components/YouthChurch";
import { NavbarMenu } from "../../components/Layout";
import { ladiesHero } from "../../images";

const ladiesFellowship = () => {
  const background_image = {
    backgroundImage: `url(${ladiesHero})`,
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
      <Discover />
      <Media />
      <MeetPastors />
    </div>
  );
};

export default ladiesFellowship;
