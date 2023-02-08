import React from "react";
import {
  Welcome,
  MemberPage,
  Gallery,
  MeetPastors,
  SupportMinistry,
} from "../../components/YouthChurch";
import { NavbarMenu } from "../../components/Layout";
import { youthChurch as youthChucher, skimpyBackground } from "../../images";

const youthChurch = () => {
  const background_image = {
    backgroundImage: `url(${youthChucher})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#CACACA",
    // backgroundAttachment: "fixed",
  };

  const background_image2 = {
    backgroundImage: `url(${skimpyBackground})`,
    maxHeight: "auto",
    maxWidth: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#474747",
    // mixBlendMode: "lighten",
    // backgroundAttachment: "fixed",
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <header style={background_image}>
        <NavbarMenu />
        <Welcome />
      </header>
      <div style={background_image2} mb-0>
        <MemberPage />
        <Gallery />
      </div>
      <MeetPastors />
      <SupportMinistry />
    </div>
  );
};

export default youthChurch;
