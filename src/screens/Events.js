import React from "react";
import { Welcome, Search } from "../components/Events";
import { NavbarMenu } from "../components/Layout";
import { pastor } from "../images";

const Events = () => {
  const background_image = {
    backgroundImage: `url(${pastor})`,
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
      <Search />
    </div>
  );
};

export default Events;
