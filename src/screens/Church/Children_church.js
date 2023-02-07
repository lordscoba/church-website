import React from "react";
import { Welcome, Discover, Gallery } from "../../components/ChildrenChurch";
import { MeetPastors, SupportMinistry } from "../../components/YouthChurch";
import { NavbarMenu } from "../../components/Layout";
import { childrenHero } from "../../images";

const childrenChurch = () => {
  const background_image = {
    backgroundImage: `url(${childrenHero})`,
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
      <Gallery />
      <MeetPastors />
    </div>
  );
};

export default childrenChurch;
