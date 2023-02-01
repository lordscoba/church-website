import React from "react";
import { Welcome, Request } from "../components/RequestPrayer";
import { NavbarMenu } from "../components/Layout";
import { request } from "../images";

const RequestPrayer = () => {
  const background_image = {
    backgroundImage: `url(${request})`,
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
      <Request />
    </div>
  );
};

export default RequestPrayer;
