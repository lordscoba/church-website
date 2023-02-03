import React from "react";
import { NavbarMenu } from "../components/Layout";
import { detailsMain } from "../images";
import { Welcome, Description } from "../components/Events/Details";

const Events_details = () => {
  const background_image = {
    backgroundImage: `url(${detailsMain})`,
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
      <Description />
    </div>
  );
};

export default Events_details;
