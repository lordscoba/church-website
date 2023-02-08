import React from "react";
import { Welcome, ChurchSubsections, Media } from "../../components/MenChurch";
import { MeetPastors, SupportMinistry } from "../../components/YouthChurch";
import { NavbarMenu } from "../../components/Layout";
import { menHero } from "../../images";

const menChurch = () => {
  const background_image = {
    backgroundImage: `url(${menHero})`,
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
      <ChurchSubsections />
      <Media />
      <MeetPastors />
    </div>
  );
};

export default menChurch;
