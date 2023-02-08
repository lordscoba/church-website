import React from "react";
import { Welcome, Embark, Media } from "../../components/AdultChurch";
import { MeetPastors, SupportMinistry } from "../../components/YouthChurch";
import { NavbarMenu } from "../../components/Layout";
import { adultHero } from "../../images";

const adultChurch = () => {
  const background_image = {
    backgroundImage: `url(${adultHero})`,
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
      <Embark />
      <Media />
      <MeetPastors />
    </div>
  );
};

export default adultChurch;
