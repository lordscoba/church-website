import React from "react";
import {
  Welcome,
  Buttons,
  YouthOutreach,
  PrayerNight,
} from "../../components/YouthGallery";
import { NavbarMenu } from "../../components/Layout";
import { slider2 } from "../../images";

const youthGallery = () => {
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
      <Buttons />
      <YouthOutreach />
      <PrayerNight />
    </div>
  );
};

export default youthGallery;
