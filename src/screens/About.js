import React from "react";
import {
  Welcome,
  Gallery,
  MeetPastor,
  ReachUs,
  Vibrant,
  WeeklyService,
} from "../components/About";
import { NavbarMenu } from "../components/Layout";
import { slider2 } from "../images";

const About = () => {
  const background_image = {
    backgroundImage: `url(${slider2})`,
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
      <Vibrant />
      <Gallery />
      <MeetPastor />
      <WeeklyService />
      <ReachUs />
    </div>
  );
};

export default About;
