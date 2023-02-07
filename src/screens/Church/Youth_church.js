import React from "react";
import {
  Welcome,
  MemberPage,
  Gallery,
  MeetPastors,
  SupportMinistry,
} from "../../components/YouthChurch";
import { NavbarMenu } from "../../components/Layout";
import { youthChurch as youthChucher } from "../../images";

const youthChurch = () => {
  const background_image = {
    backgroundImage: `url(${youthChucher})`,
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
      <MemberPage />
      <Gallery />
      <MeetPastors />
      <SupportMinistry />
    </div>
  );
};

export default youthChurch;
