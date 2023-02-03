import React from "react";
import { NavbarMenu } from "../components/Layout";
import { videoMain } from "../images";
import { Welcome, List, App } from "../components/Video";

const Video = () => {
  const background_image = {
    backgroundImage: `url(${videoMain})`,
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
      <List />
      <App />
    </div>
  );
};

export default Video;
