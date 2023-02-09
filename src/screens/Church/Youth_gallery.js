import React from "react";
import {
  Welcome,
  Buttons,
  YouthOutreach,
  PrayerNight,
} from "../../components/YouthGallery";
import { NavbarMenu } from "../../components/Layout";
import { galleryHero } from "../../images";

const youthGallery = () => {
  const background_image = {
    backgroundImage: `url(${galleryHero})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "rgba(53, 53, 53, 0.5)",
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
      <YouthOutreach />
      <PrayerNight />
      <YouthOutreach />
      <PrayerNight />
      <br />
      <br />
      <br />
    </div>
  );
};

export default youthGallery;
