import React from "react";
import {
  Welcome,
  ChurchSubsections,
  Explore,
} from "../../components/FamilyChurch";
import { MeetPastors, SupportMinistry } from "../../components/YouthChurch";
import { NavbarMenu } from "../../components/Layout";
import { familyHero } from "../../images";

const familyChurch = () => {
  const background_image = {
    backgroundImage: `url(${familyHero})`,
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
      <ChurchSubsections />
      <Explore />
      <MeetPastors />
    </div>
  );
};

export default familyChurch;
