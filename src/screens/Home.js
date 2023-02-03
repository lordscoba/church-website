import React from "react";
import {
  Welcome,
  Events,
  Member,
  Sermon,
  Testimonies,
  Worship,
} from "../components/Home";

import { NavbarMenu } from "../components/Layout";
import { slider } from "../images";

const Home = () => {
  const background_image = {
    backgroundImage: `url(${slider})`,
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
      <Sermon />
      <Worship />
      <Member />
      <Events />
      <Testimonies />
    </div>
  );
};

export default Home;
