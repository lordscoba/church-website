import React from "react";
import { Welcome, Experience, Media } from "../../components/TeensChurch";
import { MeetPastors } from "../../components/YouthChurch";
import { NavbarMenu } from "../../components/Layout";
import { teensHero } from "../../images";

const teensChurch = () => {
  const background_image = {
    backgroundImage: `url(${teensHero})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "right bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundColor: "#E5E5E5",
    // backgroundAttachment: "fixed",
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <header style={background_image}>
        <NavbarMenu />
        <Welcome />
      </header>
      <Experience />
      <Media />
      <MeetPastors />
    </div>
  );
};

export default teensChurch;
