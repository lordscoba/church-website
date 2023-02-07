import React from "react";
import {
  Welcome,
  Experience,
  Media,
} from "../../components/IntercessorsChurch";
import { NavbarMenu } from "../../components/Layout";
import { MeetPastors, SupportMinistry } from "../../components/YouthChurch";
import { intercessorsHero } from "../../images";

const intercessorsChurch = () => {
  const background_image = {
    backgroundImage: `url(${intercessorsHero})`,
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
      <Experience />
      <Media />
      <MeetPastors />
      <SupportMinistry />
    </div>
  );
};

export default intercessorsChurch;
